mainApp.controller("friendsCtrl", function(SERVER_INFO, $scope, $http, $rootScope) {
    $rootScope.navIndex = 3;
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    var currentItemsPage = 0;
    $scope.items = [];
    $scope.getItems = function() {
        $http.get(serverAddr+'/items/friends', {
            params: {
                page: currentItemsPage,
                id: $rootScope.user._id
            }
        })
            .success(function(data) {
                // console.log(JSON.stringify(data));
                $scope.items = $scope.items.concat(data);
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };

    $scope.loadMore = function() {
        currentItemsPage++;
        $scope.getItems();
    };
});
