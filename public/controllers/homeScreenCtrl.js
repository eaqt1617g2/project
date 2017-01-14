mainApp.controller("homeScreenCtrl", function(SERVER_INFO, $scope, $http, $rootScope) {
    //console.log("homeScreenCtrl");
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;

    var currentItemsPage = 0;
    $scope.items = [];

    $http.get(serverAddr+ '/users/my')
        .success(function(data) {
           // console.log(JSON.stringify(data));
            $rootScope.user = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
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



    /*
    $scope.user = {
        loginid: "Scarlet88",
        name: "Scarlett",
        last_name: "Johansson",
        email: "scarlet.johansson@gmail.com",
        creation_date: "2016-10-07T17:40:11.071Z",
        last_login_date: "2016-10-07T17:40:11.071Z",
        followers: "65",
        following: "54",
        items: "6",
        profile_pic_url: "../assets/imgs/profileTestPic3.png"
    };
    */




});
