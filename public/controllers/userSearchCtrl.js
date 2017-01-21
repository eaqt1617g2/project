mainApp.controller("userSearchCtrl", function(SERVER_INFO, $scope, $http, $routeParams, $rootScope) {
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;

    $scope.searchUsers = function() {
        $http.get(serverAddr+'/users/filter', {
            params: {loginid: $scope.loginid}
            })
            .success(function(data) {
                $scope.result_users = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
        });
    }
});