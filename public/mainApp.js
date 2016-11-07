var mainApp = angular.module("mainApp", ["ngRoute", 'ui.bootstrap', 'app.config']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/views/homeScreen.html",
            controller: "homeScreenCtrl"
        }).when("/user", {
            templateUrl : "/views/userProfile.html",
            controller: "userProfileCtrl"
    });
    
}); 