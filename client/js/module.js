'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($authProvider) {

    $authProvider.loginUrl = '/api/users/login'
    $authProvider.signupUrl = '/api/users/signup'

    $authProvider.facebook({
        clientId: '1058953380839845',
        url: '/api/users/facebook'
    })

})


app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('login', { url: '/login', templateUrl: '/html/login.html', controller: 'loginCtrl' })
    .state('home', { url: '/profile', templateUrl: '/html/home.html', controller: 'profileCtrl' })

  $urlRouterProvider.otherwise('/');
});
