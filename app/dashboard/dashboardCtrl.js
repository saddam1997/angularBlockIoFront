myApp.controller('DashBoardCtrl', function ($rootScope,$scope,$state,$localStorage,$uibModal,$log) {

$scope.user=$localStorage.test;
 //alert(angular.toJson($localStorage.test));

 $scope.sendAmountToAnotherAddressOpenModal=function(){
   //alert("sendAmountToAnotherAddressOpenModal");
   
     var modalInstance = $uibModal.open({
       templateUrl : "app/dashboard/modal/sendAmountToAnotherAddressModal.html",
       scope : $scope,
       controller : "SendAmountToAnotherAddressModalCtrl"
     });
     modalInstance.result.then(function(data) {
       alert("result...."+angular.toJson(data));
       //$localStorage.test=data.data;

     },function() {

        alert("No...result....");
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
     alert("result...."+angular.toJson(data));
    $localStorage.test=data.data;

   }, function() {

      alet("No...result....");
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
