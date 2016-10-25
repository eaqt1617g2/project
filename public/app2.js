var userApp = angular.module("userApp", ["ngRoute", 'ui.bootstrap', 'app.config']);

userApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/views/homeScreen.html"
        }).when("/loginRegister", {
            templateUrl : "/views/loginRegister.html",
            controller : "UserController"
    });
    
}); 