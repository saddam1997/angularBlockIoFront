angular.module('blocIoAppFront.signInService', [])
  .factory('SignInService', function($http) {
    function SignInService() {}
    SignInService.sign = function(userDetails) {

      alert("posting data "+angular.toJson(userDetails));

      return $http.post('http://localhost:1337/auth/authentcate', userDetails, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
            // $localStorage.credentials = response.data;
            // alert($localStorage.credentials);
        return response;
      });
    };
    
    return SignInService;
  });
