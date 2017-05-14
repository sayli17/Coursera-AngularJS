(function(){
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckerController', LunchCheckerController);
  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope){
    $scope.lunch = "";
    $scope.message = "";

    $scope.calculateMessage = function(){

      if ($scope.lunch == '') {
        $scope.message = "Please enter data first";
      }else{
        var a = $scope.lunch.split(",").length;
        if (a <= 3) {
          $scope.message = "Enjoy!";
        }else if (a > 3) {
          $scope.message = "Too much!";
        }
    }

    };
  }


})();
