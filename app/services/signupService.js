angular.module('blocIoAppFront.signUpService', [])
  .factory('SignUpService', function($http) {
    function SignUpService() {}
    SignUpService.signup = function(userDetails) {

      //alert("posting data "+angular.toJson(userDetails));

      return $http.post('http://localhost:1337/user/createusingtoken', userDetails, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
        return response;
      });
    };
    return SignUpService;
  });
