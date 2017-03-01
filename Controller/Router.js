var scotchApp = angular.module('myApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/home', {
        templateUrl: '/../pages/home.html',
        controller: 'home'
    })
    
     // route for the home page
        .when('/profile', {
        templateUrl: '/../pages/profile.html',
        controller: 'profile'
    })
    
    // route for Calender page
        .when('/calender', {
        templateUrl: '/../pages/CalendarRoute.html',
        controller: 'calender'
    });

});