angular.module('blocIoAppFront.sendAmountToAnotherAddressService', [])
  .factory('SendAmountToAnotherAddressService', function($http) {
    function SendAmountToAnotherAddressService() {}
    SendAmountToAnotherAddressService.sendAmount = function(sendAmountAddressDetails) {

      alert("posting data "+angular.toJson(sendAmountAddressDetails));

      return $http.post('http://localhost:1337/user/sendAmountToAddressApi', sendAmountAddressDetails, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {

        return response;
      });
    };
    return SendAmountToAnotherAddressService;
  });
