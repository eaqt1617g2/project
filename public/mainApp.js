var mainApp = angular.module("mainApp", ['ngRoute', 'ui.bootstrap', 'app.config', 'ngCookies', 'uiGmapgoogle-maps', 'flow', 'naif.base64']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/views/homeScreen.html",
            controller: "homeScreenCtrl"
        }).when("/discover", {
            templateUrl : "/views/discover.html",
            controller: "discoverCtrl"
        }).when("/friends", {
            templateUrl : "/views/friends.html",
            controller: "friendsCtrl"
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
        }).when("/additem", {
            templateUrl: "/views/itemAdd.html",
            controller: "itemAddCtrl"
        }).when("/item/:id", {
            templateUrl: "/views/itemView.html",
            controller: "itemViewCtrl"
        }).when("/searchuser", {
            templateUrl: "/views/userSearch.html",
            controller: "userSearchCtrl"
    });



    mainApp.config(['flowFactoryProvider', function (flowFactoryProvider) {
            flowFactoryProvider.factory = fustyFlowFactory;
        }]);
    
});

