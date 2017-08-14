myApp.controller('CreateNewAddressModalCtrl', function ($scope,CreateNewAddressService,$localStorage,$uibModalInstance) {

$scope.temp=$localStorage.credentials.user;

$scope.createNewAddress=function(){

  alert($localStorage.credentials.user.id +" Request to create new address "+$scope.labelForNewAddress);
  var userAddressDetails={
    "id":$localStorage.credentials.user.id,
    "email":$localStorage.credentials.user.email,
    "label": $scope.labelForNewAddress
  }
  alert("data : "+angular.toJson(userAddressDetails));
  CreateNewAddressService.createNewAddress(userAddressDetails).
    then(function(response) {
        $uibModalInstance.close(response);
  });
}

$scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
};
});
