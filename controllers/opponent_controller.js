angular.module('sachinStats')
.controller('opponentController', ['$scope', '$state','dataFactory', function ($scope, $state,dataFactory) {
  $scope.isFetched=false;
  $scope.sachinData ;
  $scope.pieData=[];
  

  $scope.prepareGraphData=function(){
      
       
                angular.forEach($scope.sachinData,function(item,key){
                    var obj = {
                    name: $scope.sachinData.opponent,
                    y: $scope.sachinData.opposition.length
                  };
                  $scope.pieData.push(obj);
                });
                // Sample data for pie chart
                   
                  

                  
                
                

       };
    $scope.runsAgainstOpponent=function(parsedData){
        var fiftyAndHundreds = parsedData.reduce(function (obj, el) {
            let opp = el.opposition.slice(2),
                s = parseInt(el.batting_score)

            obj[opp] = obj[opp] || 0

            if (s) {
                obj[opp] += s
            }

            return obj
        });
        console.log(fiftyAndHundreds);
    }
                
  $scope.getCsv = function(){
    dataFactory.getData()
                .then(function(data){
                    $scope.sachinData=Papa.parse(data.data.trim(), {
                                            header: true
                                        }).data;
                    $scope.isFetched=true;
                    
                    $scope.runsAgainstOpponent($scope.sachinData);
                    
                     
      
                },function(error){
                  console.log(error);
                  return error;
                });
  };              

  $scope.getCsv();
      
  
  
  
}]);
