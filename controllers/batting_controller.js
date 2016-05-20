angular.module('sachinStats')
.controller('battingController', ['$scope', '$state','dataFactory' ,function ($scope, $state,dataFactory) {
  
  $scope.isFetched=false;
  $scope.sachinData ;
  $scope.years=[];
  $scope.firstInningRuns=[];
  $scope.totalFirstInningsYearly=[];
  $scope.totalSecondInningsYearly=[];
  $scope.secondInningRuns=[];
  $scope.firstInning = true;
   $scope.showFirstInning=function(){
        $state.go('home.batting.first');
        $scope.isVisited=false;
        $scope.firstInning=true
    }
    $scope.showSecondInning=function(){
        $state.go('home.batting.second');
        $scope.isVisited=false;
        $scope.firstInning=false;
    }
    $scope.isVisited=true;

  $scope.prepareGraphData=function(object){
        var isYear=true;
        angular.forEach(object,function(item,key){
                            if(key=='2012'){
                                isYear=false;
                            }
                            if(isYear){
                                $scope.years.push(key);
                                $scope.firstInningRuns.push(item[0][1]);
                                $scope.totalFirstInningsYearly.push(item[0][0]);
                                $scope.secondInningRuns.push(item[1][1]);
                                $scope.totalSecondInningsYearly.push(item[1][0]);
                            }
                            
                        });
                    

    };
  $scope.centuriesPerYear=function(parsedData){
        var centuriesPerYear = parsedData.reduce(function (obj, el) {
            var years = el.date.slice(-4);
            var runs = parseInt(el.batting_score);
            var  inn = parseInt(el.batting_innings[0]);
             obj[years] = obj[years] || [
                [0, 0],
                [0, 0]
            ]

            if (runs >= 0) {
                if (inn === 1) {
                    // matches per year, runs per year
                    if (el.batting_score.slice(-1) !== '*') obj[years][0][0] += 1
                    obj[years][0][1] += runs
                } else if (inn === 2) {
                    if (el.batting_score.slice(-1) !== '*') obj[years][1][0] += 1
                    obj[years][1][1] += runs
                }
            }

            return obj
        });
        return centuriesPerYear;
        
  };

  $scope.getCsv = function(){
         dataFactory.getData()
                .then(function(data){
                    var sachinData=Papa.parse(data.data.trim(), {
                                            header: true
                                        }).data;
                    $scope.isFetched=true;//to confirm that data is fetched and  can be used in directive
                    
                    $scope.prepareGraphData($scope.centuriesPerYear(sachinData));
                
                },function(error){
                  console.log(error);
                  return error;
                });
    };              

  $scope.getCsv();
      
      
  
}]);
