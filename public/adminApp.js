var adminApp = angular.module("adminApp", ["ngRoute", 'ui.bootstrap', 'app.config']);

adminApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/admin/adminUserList.html",
        controller: "adminUserController"
    })
    .when("/items", {
        templateUrl : "/views/admin/adminItemList.html"
    })
    .when("/create", {
        templateUrl:  "/views/admin/adminCreateUser.html",
        controller: "adminUserController"
    })
    .when("/modify/:id", {
        templateUrl:  "/views/admin/adminModifyUser.html",
        controller: "adminUserController"
    });
    
}); 