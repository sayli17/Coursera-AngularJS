(function(){
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckerController', LunchCheckerController);
  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope){
    $scope.lunch = "";
    $scope.msg = "";

    $scope.calculateMessage = function(){

      if ($scope.lunch == '') {
        $scope.msg = "Please enter data first";
      }
      else{
        var a = $scope.lunch.split(",").length;
        if (a <= 3) {
          $scope.msg = "Enjoy!";
        }else if (a > 3) {
          $scope.msg = "Too much!";
        };

        
    }

    };
  }


})();
