'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function() {
  console.log('mainCtrl!');

  $scope.isAuthenticated = () => $auth.isAuthenticated();

  $scope.logOut = () => {
    $auth.logout();
    $state.go('login');
  }

  $scope.authenticate = provider => {
    $auth.authenticate(provider)
      .then(res => {
        console.log('res:', res);
        $state.go('home');
      })
      .catch(err => {
        console.log('err:', err);
      })
  };
});


});

app.controller('loginCtrl', function() {
  console.log('loginCtrl!');



});

app.controller('profileCtrl', function() {
  console.log('profileCtrl!');
});
