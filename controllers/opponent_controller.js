angular.module('sachinStats')
.controller('opponentController', ['$scope', '$state','dataFactory', function ($scope, $state,dataFactory) {
    $scope.isFetched=false;
    $scope.opponentStats=[];
    $scope.wicketsStats=[];
    $scope.highlightTab=true;

    
    $scope.showBattingStats=function(){
        $state.go('home.opponent.batting');
        $scope.isVisited=false;
        $scope.highlightTab=true;
    }
    $scope.showBowlingStats=function(){
        $state.go('home.opponent.bowling');
        $scope.isVisited=false;
        $scope.highlightTab=false;
    }
    $scope.isVisited=true;
     
   

    $scope.prepareGraphData=function(array){
                var pieData=[]
                var isCountry=false;
                angular.forEach(array,function(item,key){
                     if(key=='2012'||key=='Australia'){
                            isCountry=true
                        }
                        if(!isCountry){
                            var obj = {
                                name: key,
                                y: item
                              };
                            pieData.push(obj);// Sample data for pie chart
                        }
                        
                    
                  
                });
                console.log(pieData);
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
        var pieData=[];
        var isCountry=false;
        angular.forEach(oppWiseRunsObj,function(item,key){
            if(key=='Australia'){
                isCountry=true
            }
            if(isCountry){
                var obj = {
                    name: key,
                    y: item
                };
                pieData.push(obj);// Sample data for pie chart
            }
                        
                    
                  
        });
        return pieData;
        
    };
    $scope.wicketsAgainstOpponent=function(parsedData){
        var oppWiseWicketsObj = parsedData.reduce(function (obj, el) {
            var countries = el.date.slice(-4);
            var wickets = parseInt(el.wickets);
            
            obj[countries] = obj[countries] || 0
               
            if (wickets) {
                obj[countries] += wickets
            }
            
            return obj
        });
        var pieData=[];
        var isCountry=false;
        angular.forEach(oppWiseWicketsObj,function(item,key){
            if(key=='2012'){
                isCountry=true
            }
            if(!isCountry){
                var obj = {
                    name: key,
                    y: item
                };
                pieData.push(obj);// Sample data for pie chart
            }
                        
                    
                  
        });
        return pieData;
        
    };
                
    $scope.getCsv = function(){
         dataFactory.getData()
                .then(function(data){
                    var sachinData=Papa.parse(data.data.trim(), {
                                            header: true
                                        }).data;
                    $scope.isFetched=true;//to confirm that data is fetched and  can be used in directive
                    
                    $scope.opponentStats=$scope.runsAgainstOpponent(sachinData);
                    console.log($scope.opponentStats);
                    
                    $scope.wicketsStats=$scope.wicketsAgainstOpponent(sachinData);
                    
                
                },function(error){
                  console.log(error);
                  return error;
                });
    };              

  $scope.getCsv();
      
  
  
  
}]);
