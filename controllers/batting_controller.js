angular.module('sachinStats')
.controller('battingController', ['$scope', '$state','dataFactory' ,function ($scope, $state,dataFactory) {
  
  $scope.isFetched=false;
  $scope.sachinData ;
  $scope.pieData=[];
  

  $scope.prepareGraphData=function(){
      
       $scope.chartOptions = {
                    title: {
                        text: 'Temperature data'
                    },
                    xAxis: {
                        categories: $scope.sachinData.year
                    },

                    series: [{
                        data:   $scope.sachinData.batting_score
                    }]
                };
                angular.forEach($scope.sachinData,function(item,key){
                    var obj = {
                    name: $scope.sachinData.opposition,
                    y: $scope.sachinData.opposition.length
                  };
                  $scope.pieData.push(obj);
                });
                // Sample data for pie chart
                
                  

                  
                
                

       };
                
  $scope.getCsv = function(){
    dataFactory.getData()
                .then(function(result){
                    
                    Papa.parse(result.data, {
                      header: true,
                      dynamicTyping: true,
                      complete: function(results) {
                        $scope.sachinData = results;
                      }
                    });
                    
                    $scope.prepareGraphData();
                  
                  
                    $scope.isFetched=true;
                  
                    
                    
                     
      
                },function(error){
                  console.log(error);
                  return error;
                });
  };              

  $scope.getCsv();
      
      
  
}]);
