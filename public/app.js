var adminApp = angular.module("adminApp", ["ngRoute", 'ui.bootstrap']);

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
    .when("/modify/:id", {
        templateUrl:  "/views/adminModifyUser.html",
        controller: "adminUserController"
    });
    
}); 