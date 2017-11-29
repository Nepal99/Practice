

var myapplication = angular.module('myApp', ["ngRoute"]);   
/**
 * here we initialize the angualar application.  var moduleName = angular.module("ng-app name", [dependencies]); 
 * Then inject the module with ngRoute. this is the dependency injection. 
 */ 


 /**
 * config will execute only at the time of cration of the module.
 * run() method will only execute after the config method is executed, even if we put them in any order, config method will only execute first.
 * run() method will execute even if we don't have the config() method.
 */

myapplication.config(function($routeProvider,$locationProvider){

    $locationProvider.hashPrefix('');

    $routeProvider
    .when('/dashboard', {
        templateUrl  : 'view/dashboard.html',
        controller   : 'DashboardCtrl',
        controllerAs : 'DashboardCtrl'
    })
    .when('/messages', {
        templateUrl  : 'view/messages.html',
        controller   : 'MessagesCtrl',
        controllerAs : 'MessagesCtrl'
    })
    .when('/comments', {
        templateUrl  : 'view/comments.html',
        controller   : 'CommentsCtrl',
        controllerAs : 'CommentsCtrl'
    })
    .when('/settings', {
        templateUrl  : 'view/settings.html',
        controller   : 'SettingsCtrl',
        controllerAs : 'SettingsCtrl'
    })
    .otherwise({
        redirectTO: '/dashboard'
    })

    console.log("Inside config.");
});

myapplication.run(function(){
    console.log("Inside run.");
});

