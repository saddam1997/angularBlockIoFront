// Instantiate the app, the 'myApp' parameter must
// match what is in ng-app templateUrl
var myApp = angular.module('blocIoAppFront', ['ui.router',
'ngStorage',
'ngDialog',
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
    controller: 'SignInCtrl',
    authenticate: false
  }
  var signupState = {
    name: 'signup',
    url: '/signup',
    templateUrl: 'app/signup/signup.html',
    controller: 'SignUpCtrl',
    authenticate: false
  }
  var dashboardState = {
    name: 'dashboard',
    url: '/dashboard',
    templateUrl: 'app/dashboard/dashboard.html',
    controller:'DashBoardCtrl',
    authenticate: true
  }

  $stateProvider.state(signinState);
  $stateProvider.state(signupState);
  $stateProvider.state(dashboardState);
});

myApp.run(function ($rootScope, $state, AuthService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.authenticate && !AuthService.isAuthenticated()){
      // User isn’t authenticated

      $state.transitionTo("signin");
      event.preventDefault();
    }
  });
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
