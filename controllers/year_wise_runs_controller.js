angular.module('sachinStats')
.controller('winLossController', ['$scope', '$state','dataFactory', function ($scope, $state,dataFactory) {
	$scope.isFetched=false;
	$scope.yearWiseRuns=[];
	$scope.years=[];
	$scope.prepareGraphData=function(object){
		var isYear=true;
		angular.forEach(object,function(item,key){
							if(key=='2012'){
								isYear=false;
							}
							if(isYear){
		                        $scope.yearWiseRuns.push(item);
		                        $scope.years.push(key);
	                        }
	                        
	                    });

	};
	$scope.runsPerYear=function(parsedData){
        var runsPerYear = parsedData.reduce(function (obj, el) {
            var years = el.date.slice(-4);
            var runs = parseInt(el.batting_score);
            
            obj[years] = obj[years] || 0
               
            if (runs) {
                obj[years] += runs
            }

            return obj
        });
        return runsPerYear;
        
    };
	$scope.getCsv = function(){
	         	dataFactory.getData()
	                .then(function(data){
	                    var sachinData=Papa.parse(data.data.trim(), {
	                                            header: true
	                                        }).data;
	                    $scope.isFetched=true;//to confirm that data is fetched and  can be used in directive
	                    
	                    
	                    $scope.prepareGraphData($scope.runsPerYear(sachinData));
	                    
	                
	                },function(error){
	                  console.log(error);
	                  return error;
	            });
	};              

	$scope.getCsv();
  
  
}]);
