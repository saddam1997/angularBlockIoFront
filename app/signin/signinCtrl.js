myApp.controller('SignInCtrl', function ($rootScope,AuthService,$scope,
SignInService,$state,$http,$localStorage,ngDialog,$timeout){


  var dialog = ngDialog.open({
      template: '<p>Login Succefully. </p>',
      plain: true
  });
 $timeout( function(){
   dialog.close();
    }, 3000 );

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

          var dialog = ngDialog.open({
 					    template: '<p>Login Succefully. </p>',
 					    plain: true
 					});
 				 $timeout( function(){
 					 dialog.close();
 			      }, 3000 );
          $localStorage.credentials = response.data;

          //alert(angular.toJson($localStorage.credentials));
          //alert($localStorage.credentials.token);
          //$http.defaults.headers.common.Authorization = 'Bearer '+response.data.token;
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
