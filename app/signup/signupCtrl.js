myApp.controller('SignUpCtrl', function ($rootScope,$scope,SignUpService,$state,$localStorage) {



  $scope.signup = function() {

//if($scope.password!=$scope.confirmPassword)

      var userDetails ={
        "email":$scope.email,
        "password":$scope.password
      }
      alert(" signin "+angular.toJson(userDetails));
      SignUpService.signup(userDetails).
        then(function(response) {
          
            if (response.status == 200) {
              alert("User created succesfully.....");
            }
      });
  };


});
