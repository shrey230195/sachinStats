angular.module('sachinStats')
.controller('centuriesController', ['$scope', '$state','dataFactory', function ($scope, $state,dataFactory) {
    $scope.isFetched=false;
    $scope.chartOptions = {
                    title: {
                        text: 'Temperature data'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },

                    series: [{
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }]
    };
    $scope.centuriesPerYear=function(parsedData){
        var centuriesPerYear = parsedData.reduce(function (obj, el) {
            var years = el.date.slice(-4);
            var runs = parseInt(el.batting_score);
            
            obj[countries] = obj[countries] || [0,0]
               
            if (50 <= score && score < 100) {
                obj[years][0] += 1
            } else if (100 <= score) {
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
                    
                    //$scope.prepareGraphData();
                
                },function(error){
                  console.log(error);
                  return error;
                });
    };              

  $scope.getCsv();
      
  
}]);
