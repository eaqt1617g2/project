userApp.controller("UserController", function(SERVER_INFO, $scope, $http, $location, $routeParams, $uibModal) {
    
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    console.log("Server: "+serverAddr);
    $scope.user= {};
    $scope.login = function(user){
        console.log($scope.user);
    };
    $scope.register = function(user){
        console.log($scope.user);
    };


    

}).controller("homeController", function(SERVER_INFO, $scope, $http, $location, $routeParams, $uibModal) {
    $scope.logout= function () {
        console.log("logout");
    }
});