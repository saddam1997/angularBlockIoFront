myApp.controller('SendAmountToAnotherAddressModalCtrl', function ($scope,SendAmountToAnotherAddressService,$localStorage,$uibModalInstance) {


$scope.sendAmountToAdd=function(){

  //alert("Request to create new address "+$scope.labelForNewAddress);
  var sendAmountAddressDetails={
    "recieverAddress":$scope.recieverAddress,
    "amount":$scope.amount,
    "commentForSender": "commentForSender sdfgsdf",
    "commentForReciever": "commentForRecieversdfg sdf g"
  }
  alert(angular.toJson(sendAmountAddressDetails));
  SendAmountToAnotherAddressService.sendAmount(sendAmountAddressDetails).
    then(function(response) {
        $uibModalInstance.close(response);
  });
}

$scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
};
});
