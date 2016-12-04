var mainApp = angular.module("mainApp", ['ngRoute', 'ui.bootstrap', 'app.config', 'ngCookies', 'uiGmapgoogle-maps']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/views/homeScreen.html",
            controller: "homeScreenCtrl"
        }).when("/user/:loginid", {
            templateUrl : "/views/userProfile.html",
            controller: "userProfileCtrl"
        }).when("/config", {
            templateUrl: "/views/userConfiguration.html"

        }).when("/item/:id", {
            templateUrl: "/views/itemView.html",
            controller: "itemViewCtrl"
    });
    
}); 