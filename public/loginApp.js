var loginApp = angular.module("loginApp", ["ngRoute", 'ui.bootstrap', 'app.config']);

loginApp.config(function($routeProvider) {
    /*Route provider*/
    $routeProvider
        .when("/", {
            templateUrl : "/views/loginForm.html"
        })
        .when("/register", {
            templateUrl: "/views/registerForm.html"

    });

});
