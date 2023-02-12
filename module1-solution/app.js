(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";

    $scope.checkDishesAndDisplayMessage = function () {
        if ($scope.dishes){
var number =  $scope.dishes.toString().split(",");
if(number.length<=3)
 $scope.message = "Enjoy!";
 else
 $scope.message = "Too much!";
        } 
        else
            $scope.message = "Please enter data first";
    };
  }
})();
