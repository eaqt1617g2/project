loginApp.controller("loginRegisterCtrl", function(SERVER_INFO, $scope, $http, $location, $routeParams, $uibModal) {

    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    console.log("Server: "+serverAddr);


    $scope.login = function(){
        console.log("Login function");
        window.location.href = serverAddr+"/";
    };

    $scope.loginClick = function()
    {
        console.log("loginClick");
        angular.element(document.querySelector('#login-form-link')).addClass("active");
        angular.element(document.querySelector('#register-form-link')).removeClass("active");
    }
    $scope.registerClick = function()
    {
        console.log("registerClick");
        angular.element(document.querySelector('#register-form-link')).addClass("active");
        angular.element(document.querySelector('#login-form-link')).removeClass("active");
    }


});