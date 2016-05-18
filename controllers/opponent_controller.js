angular.module('sachinStats')
.controller('opponentController', ['$scope', '$state','dataFactory', function ($scope, $state,dataFactory) {
    $scope.isFetched=false;
    $scope.pieData=[];
    $scope.runs=[];
    $scope.countries=[];
    
     $scope.showBattingStats=function(){
        $state.go('home.opponent.batting');
        
    }
    $scope.showBowlingStats=function(){
        $state.go('home.opponent.bowling');
        
    }
    
     
   

    $scope.prepareGraphData=function(){
      
                angular.forEach($scope.countries,function(item,key){
                    var obj = {
                    name: $scope.countries[key],
                    y: $scope.runs[key]
                  };
                  $scope.pieData.push(obj);// Sample data for pie chart
                });
    };

    $scope.runsAgainstOpponent=function(parsedData){
        var oppWiseRunsObj = parsedData.reduce(function (obj, el) {
            var countries = el.opposition.slice(2);
            var runs = parseInt(el.batting_score);
            
            obj[countries] = obj[countries] || 0
               
            if (runs) {
                obj[countries] += runs
            }

            return obj
        });
        return oppWiseRunsObj;
        
    };
                
    $scope.getCsv = function(){
         dataFactory.getData()
                .then(function(data){
                    var sachinData=Papa.parse(data.data.trim(), {
                                            header: true
                                        }).data;
                    $scope.isFetched=true;//to confirm that data is fetched and  can be used in directive
                    
                    var opponent=$scope.runsAgainstOpponent(sachinData);
                    var isCountry=false;
                    angular.forEach(opponent,function(item,key){

                        if(key=='Australia'){
                            isCountry=true
                        }
                        if(isCountry){
                            $scope.countries.push(key);
                            $scope.runs.push(item);
                        }
                        
                    });
                    $scope.prepareGraphData();
                
                },function(error){
                  console.log(error);
                  return error;
                });
    };              

  $scope.getCsv();
      
  
  
  
}]);
