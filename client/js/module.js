'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('login', { url: '/login', templateUrl: '/html/login.html', controller: 'loginCtrl' })
    .state('home', { url: '/profile', templateUrl: '/html/home.html', controller: 'profileCtrl' })

  $urlRouterProvider.otherwise('/');
});
