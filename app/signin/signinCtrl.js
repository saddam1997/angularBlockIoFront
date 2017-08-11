myApp.controller('SignInCtrl', function ($rootScope,AuthService,$scope,SignInService,$state,$localStorage){

alert(" signin "+AuthService.isAuthenticated());
if(AuthService.isAuthenticated()){
  $state.go('dashboard');
}
  $scope.signin = function() {
      alert(" signiasdfn ");
      var userDetails ={
        "email":$scope.email,
        "password":$scope.password
      }
      SignInService.sign(userDetails)
      .then(
        function successCallback(response) {
          $localStorage.credentials = response.data;
          $state.go('dashboard');
        },
        function errorCallback() {
          _reset();
        }
      );
  };
  function _reset() {

    // Initialize credentials
    $scope.credentials = {
      identifier: '',
      password: ''
    };
  }

  _reset();

});
