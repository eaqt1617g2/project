var adminApp = angular.module("adminApp", ["ngRoute"]);

adminApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/adminUserList.html",
        controller: "adminUserController"
    })
    .when("/items", {
        templateUrl : "/views/adminItemList.html"
    })
    .when("/create", {
        templateUrl:  "/views/adminCreateUser.html",
        controller: "adminUserController"
    })
    .when("/modify", {
        templateUrl:  "/views/adminModifyUser.html",
        controller: "adminUserController"
    });
    
}); 