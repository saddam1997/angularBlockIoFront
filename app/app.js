// Instantiate the app, the 'myApp' parameter must
// match what is in ng-app templateUrl
var myApp = angular.module('blocIoAppFront', ['ui.router',
'ngStorage',
'ui.bootstrap','monospaced.qrcode',
'blocIoAppFront.createNewAddressService',
'blocIoAppFront.signUpService',
'blocIoAppFront.sendAmountToAnotherAddressService',
'blocIoAppFront.authService',
'blocIoAppFront.signInService']);

myApp.config(function($stateProvider) {
  var signinState = {
    name: 'signin',
    url: '/signin',
    templateUrl: 'app/signin/signin.html',
    controller: 'SignInCtrl'
  }
  var signupState = {
    name: 'signup',
    url: '/signup',
    templateUrl: 'app/signup/signup.html',
    controller: 'SignUpCtrl'
  }
  var dashboardState = {
    name: 'dashboard',
    url: '/dashboard',
    templateUrl: 'app/dashboard/dashboard.html',
    controller:'DashBoardCtrl'
  }

  $stateProvider.state(signinState);
  $stateProvider.state(signupState);
  $stateProvider.state(dashboardState);
});

myApp.controller('AppCtrl', function ($scope,AuthService) {

    $scope.auth = AuthService;
    $scope.logout = function () {
      alert("asdfasdf")
      AuthService.logout();
    };
    // $scope.userId=$localStorage.test.id;
    // alert("AppCtrl  "+$scope.userId);
});
