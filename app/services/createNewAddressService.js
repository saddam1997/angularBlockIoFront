angular.module('blocIoAppFront.createNewAddressService', [])
  .factory('CreateNewAddressService', function($http) {
    function CreateNewAddressService() {}
    CreateNewAddressService.createNewAddress = function(userAddressDetails) {

      //alert("posting data "+angular.toJson(userAddressDetails));

      return $http.post('http://localhost:1337/user/createNewAddressApi', userAddressDetails, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {

        return response;
      });
    };
    return CreateNewAddressService;
  });
