mainApp.controller("homeScreenCtrl", function(SERVER_INFO, $scope, $http, $rootScope) {
    //console.log("homeScreenCtrl");
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    $rootScope.navIndex = 1;

    var currentItemsPage = 0;
    $scope.items = [];

    $http.get(serverAddr+ '/users/my')
        .success(function(data) {
           // console.log(JSON.stringify(data));
            $rootScope.user = data;
            if(data.photo_id != undefined) {
                $rootScope.user.photo_user = serverAddr+"/assets/imgs/profiles/"+$rootScope.user.photo_id;
            }
        })
        .error(function(data) {
            console.log('Error: ' + data);
            window.location.href = serverAddr+"/access";
        });


    $scope.logout = function() {
        console.log("Logout");
        window.location.href = serverAddr+"/access";
    };

    $scope.getItems = function() {
        $http.get(serverAddr+'/items', {
            params: {page: currentItemsPage}
        })
        .success(function(data) {
           // console.log(JSON.stringify(data));
            $scope.items = $scope.items.concat(data);
        })
        .error(function(err) {
            console.log('Error: ' + err);
        });
    };

    $scope.getAllItems = function() {
        $http.get(serverAddr+'/items/')
            .success(function(data) {
                $scope.items = data;

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.loadMore = function() {
        currentItemsPage++;
        $scope.getItems();
    };

});
