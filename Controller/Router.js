var scotchApp = angular.module('myApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: '/../pages/home.html',
        controller: 'home'
    })

});