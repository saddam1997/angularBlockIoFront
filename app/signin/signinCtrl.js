myApp.controller('SignInCtrl', function ($rootScope,$scope,SignInService,$state,$localStorage) {



  $scope.signin = function() {


      var userDetails ={
        "email":$scope.email,
        "password":$scope.password
      }
      //alert(" signin "+angular.toJson(userDetails));
      SignInService.sign(userDetails).
        then(function(response) {
            console.log("Response :: " + angular.toJson(response));
            if (response.status == 200) {
              $localStorage.test=response.data;
               $state.go('dashboard');
            }
      });
  };


});
