angular.module('blocIoAppFront.signInService', [])
  .factory('SignInService', function($http) {
    function SignInService() {}
    SignInService.sign = function(userDetails) {

      alert("posting data "+angular.toJson(userDetails));

      return $http.post('http://localhost:1337/session/create', userDetails, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {

        return response;
      });
    };
    return SignInService;
  });
