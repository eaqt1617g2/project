var userApp = angular.module("mainApp", ["ngRoute", 'ui.bootstrap', 'app.config']);

userApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/views/homeScreen.html"
        }).when("/user", {
            templateUrl : "/views/userProfile.html"
    });
    
}); 