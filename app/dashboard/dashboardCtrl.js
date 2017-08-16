myApp.controller('DashBoardCtrl', function ($rootScope,$scope,$state,$localStorage,$uibModal,
  $log,toastr) {

$scope.user=$localStorage.credentials.user;
//alert(angular.toJson($localStorage.credentials)+" signin ");


$scope.sendAmountToAnotherAddressOpenModal=function(){

     var modalInstance = $uibModal.open({
       templateUrl : "app/dashboard/modal/sendAmountToAnotherAddressModal.html",
       scope : $scope,
       controller : "SendAmountToAnotherAddressModalCtrl"
     });
     modalInstance.result.then(function(data) {
       //alert("result...."+angular.toJson(data));
     },function() {
        //alert("No...result....");
     });
}

$scope.createNewAddressOpenModal=function(){
   //alert(angular.toJson("createNewAddressOpenModal"))
   var modalInstance = $uibModal.open({
     templateUrl : "app/dashboard/modal/createNewAddressModal.html",
     scope : $scope,
     controller : "CreateNewAddressModalCtrl"
   });
   modalInstance.result.then(function(data) {
     $localStorage.credentials.user=data.data;
     //alert("Create new Address...result...."+angular.toJson(data.data));
     $scope.user=$localStorage.credentials.user;

   }, function() {

      //alert("No...result....");
   });
}
 $scope.viewQRCodeModal=function(currentAddressDetails){
      //alert(angular.toJson(currentAddressDetails))
  		var modalInstance = $uibModal.open({
  			templateUrl : "app/dashboard/modal/viewQRCodeModal.html",
  			scope : $scope,
        controller : "ViewQRCodeModalCtrl",
				resolve : {
					selectedRow : function() {
						return {
							"currentAddressDetails" :currentAddressDetails
						};
					}
				}
  		});
  		modalInstance.result.then(function(data) {

  		}, function() {

  			$log.info("Model Dismiss modalInstance");
  		}
  		);
  	}
});
