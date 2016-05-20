angular.module('sachinStats')
.controller('centuriesController', ['$scope', '$state','dataFactory', function ($scope, $state,dataFactory) {
    $scope.isFetched=false;
    $scope.years=[];
    $scope.yearWiseCenturies=[];
    $scope.yearWiseHalfCenturies=[];
    $scope.highlightTab=true;
     $scope.showHalfCenturies=function(){
        $state.go('home.centuries.half');
        $scope.isVisited=false;
        $scope.highlightTab=false;
    }
    $scope.showFullCenturies=function(){
        $state.go('home.centuries.full');
        $scope.isVisited=false;
        $scope.highlightTab=true;
    }
    $scope.isVisited=true;

    $scope.prepareGraphData=function(object){
        var isYear=true;
        angular.forEach(object,function(item,key){
                            if(key=='2012'){
                                isYear=false;
                            }
                            if(isYear){
                                $scope.yearWiseCenturies.push(item[1]);
                                $scope.yearWiseHalfCenturies.push(item[0]);
                                $scope.years.push(key);
                            }
                            
                        });

    };
    $scope.centuriesPerYear=function(parsedData){
        var centuriesPerYear = parsedData.reduce(function (obj, el) {
            var years = el.date.slice(-4);
            var runs = parseInt(el.batting_score);
            
            obj[years] = obj[years] || [0,0]
               
            if (50 <= runs && runs < 100) {
                obj[years][0] += 1
            } else if (100 <= runs) {
                obj[years][1] += 1
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
