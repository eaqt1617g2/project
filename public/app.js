var adminApp = angular.module("adminApp", ["ngRoute"]);

adminApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/adminUserList.html",
        controller: "adminUserListController"
    })
    .when("/items", {
        templateUrl : "/views/adminItemList.html"        
    });
    
}); 