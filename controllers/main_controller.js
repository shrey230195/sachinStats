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
  $scope.highlightBatting=false;
  $scope.highlightRunsPerYear=false;
  $scope.highlightOpponent=false;
  $scope.highlightCenturies=false;
  $scope.goToBattingStats = function(){
    $scope.highlightBatting=true;
    $state.go('home.batting');
    
    $scope.highlightRunsPerYear=false;
    $scope.highlightOpponent=false;
    $scope.highlightCenturies=false;
  };
  $scope.goToRunsPerYearStats = function(){
    $state.go('home.runsPerYear');
    $scope.highlightRunsPerYear=true;
    $scope.highlightBatting=false;
    
    $scope.highlightOpponent=false;
    $scope.highlightCenturies=false;
    
  };
  $scope.goToOpponentStats = function(){
    $state.go('home.opponent');
    $scope.highlightOpponent=true;
    $scope.highlightBatting=false;
    $scope.highlightRunsPerYear=false;
    
    $scope.highlightCenturies=false;
      
  };
  $scope.goToCenturiesStats = function(){
    $state.go('home.centuries');
    $scope.highlightCenturies=true;
    $scope.highlightBatting=false;
    $scope.highlightRunsPerYear=false;
    $scope.highlightOpponent=false;
    
    
  };
  
}]);


})();