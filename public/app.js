var adminApp = angular.module("adminApp", ["ngRoute"]);

adminApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/adminUserList.html",
        controller: "adminUserListController"
    })
    .when("/items", {
        templateUrl : "/views/adminItemList.html"
    })
    .when("/create", {
        templateUrl:  "/views/adminCreateUser.html",
        controller: "adminUserListController"
    })
    .when("/modify", {
        templateUrl:  "/views/adminModifyUser.html",
        controller: "adminUserListController"
    });
    
}); 