myApp.controller('ViewQRCodeModalCtrl', function ($scope,selectedRow,$uibModalInstance) {
  
$scope.currentAddress= selectedRow.currentAddressDetails;

$scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
};

});
