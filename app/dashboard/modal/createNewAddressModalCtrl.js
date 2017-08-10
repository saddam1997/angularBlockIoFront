myApp.controller('CreateNewAddressModalCtrl', function ($scope,CreateNewAddressService,$localStorage,$uibModalInstance) {


$scope.createNewAddress=function(){

  alert("Request to create new address "+$scope.labelForNewAddress);
  var userAddressDetails={
    "id":$localStorage.test.id,
    "email":$localStorage.test.email,
    "label": $scope.labelForNewAddress
  }
  CreateNewAddressService.createNewAddress(userAddressDetails).
    then(function(response) {
        $uibModalInstance.close(response);
  });
}

$scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
};
});
