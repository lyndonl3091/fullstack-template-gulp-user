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

app.controller('loginCtrl', function() {
  console.log('loginCtrl!');

  $scope.userLogin = () => {
      $auth.login($scope.user)
      .then(res => {
        $state.go('profile')
      })
      .catch(err => {
        console.log('err:', err);
      })
    }

    $scope.register = () => {
      if($scope.newUser.password !== $scope.newUser.password2) {
        $scope.newUser.password = null;
        $scope.newUser.password2 = null;
        alert('Passwords must match.  Try again.')
      } else {
        console.log('$scope.newUser', $scope.newUser)
        $auth.signup($scope.newUser)
        .then(res => {
          $auth.login($scope.newUser)
          .then(res => {
            $state.go('profile')
          })
        })
        .catch(err => {
          console.log('err:', err);
        })
      }
    }
});


app.controller('profileCtrl', function() {
  console.log('profileCtrl!');
});
