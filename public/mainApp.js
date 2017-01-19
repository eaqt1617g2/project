var mainApp = angular.module("mainApp", ['ngRoute', 'ui.bootstrap', 'app.config', 'ngCookies', 'uiGmapgoogle-maps', 'flow']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/views/homeScreen.html",
            controller: "homeScreenCtrl"
        }).when("/user/:loginid", {
            templateUrl : "/views/userProfile.html",
            controller: "userProfileCtrl"
        }).when("/user/:loginid/followers", {
            templateUrl: "/views/userFollowers.html",
            controller: "userProfileCtrl"
        }).when("/user/:loginid/following", {
            templateUrl: "/views/userFollowing.html",
            controller: "userProfileCtrl"
        }).when("/config", {
            templateUrl: "/views/userConfiguration.html",
            controller: "userConfCtrl"
        }).when("/additem/:loginid", {
            templateUrl: "/views/itemAdd.html",
            controller: "itemAddCtrl"
        }).when("/item/:id", {
            templateUrl: "/views/itemView.html",
            controller: "itemViewCtrl"
        }).when("/searchuser", {
            templateUrl: "/views/userSearch.html"
    });

    mainApp.config(['flowFactoryProvider', function (flowFactoryProvider) {
         flowFactoryProvider.factory = fustyFlowFactory;
        }]);
}); 