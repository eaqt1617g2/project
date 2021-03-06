mainApp.controller("discoverCtrl", function(SERVER_INFO, $scope, $http, $rootScope) {
    $rootScope.navIndex = 2;
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    var currentItemsPage = 0;
    $scope.items = [];
    $scope.getItems = function() {
        $http.get(serverAddr+'/items/discover', {
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
});
