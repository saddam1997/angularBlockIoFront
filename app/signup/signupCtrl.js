myApp.controller('SignUpCtrl', function ($rootScope,$scope,SignUpService,$state,$localStorage) {
  $scope.signup = function() {
//if($scope.password!=$scope.confirmPassword)
      var userDetails ={
        "email":$scope.email,
        "password":$scope.password,
        "confirmPassword":$scope.confirmPassword

      }
      alert(" signin "+angular.toJson(userDetails));
      SignUpService.signup(userDetails).
        then(function(response) {
              alert("User created succesfully.....");
          $state.go("signin");
      });
  };


});
