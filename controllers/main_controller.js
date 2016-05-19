/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular.module('sachinStats')
.controller('MainController', ['$scope', '$state', function ($scope, $state) {
  $scope.firstVisit = true;
  if($scope.firstVisit){
    $state.go('home.sachin');
    $scope.firstVisit = false;
  }
  $scope.$on('$viewContentLoaded', function (){
    $scope.$broadcast ('viewContentLoaded');
  });

  $scope.goToBattingStats = function(){
    $state.go('home.batting');
    
  };
  $scope.goToRunsPerYearStats = function(){
    $state.go('home.runsPerYear');
    
  };
  $scope.goToOpponentStats = function(){
    $state.go('home.opponent');
    
  };
  $scope.goToCenturiesStats = function(){
    $state.go('home.centuries');
    
  };
  
}]);


})();