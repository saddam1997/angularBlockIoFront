myApp.controller('ViewQRCodeModalCtrl', function ($scope,selectedRow) {

//  alert("model :: "+selectedRow.user);
$scope.currentAddress= selectedRow.currentAddressDetails;
alert("model :: "+$scope.currentAddress);
});
