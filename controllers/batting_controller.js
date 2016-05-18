angular.module('sachinStats')
.controller('battingController', ['$scope', '$state','dataFactory' ,function ($scope, $state,dataFactory) {
  
  $scope.isFetched=false;
  $scope.sachinData = [];
  $scope.pieData=[];
  /*$scope.processData = function(allText) {
                    // split content based on new line
                    var allTextLines = allText.split(/\r\n|\n/);
                    //console.log('--->',allTextLines);
                    var headers = allTextLines[0].split(',');
                    var lines = [];

                    for ( var i = 0; i < allTextLines.length; i++) {
                        // split content based on comma
                        var data = allTextLines[i].split(',');
                        if (data.length == headers.length) {
                            var tarr = [];
                            for ( var j = 0; j < headers.length; j++) {
                                tarr.push(data[j]);
                            }
                            lines.push(tarr);
                        }
                    }
                    //console.log(lines);
                    
                    return lines;
                    
                    
                };*/

  $scope.prepareGraphData=function(){
    console.log($scope.sachinData[0]);
       $scope.chartOptions = {
                    title: {
                        text: 'Temperature data'
                    },
                    xAxis: {
                        categories: $scope.sachinData[0]
                    },

                    series: [{
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }]
                };

                // Sample data for pie chart
                for(heading in $scope.sachinData[0]){
                  var obj = {
                    name: $scope.sachinData[0][heading],
                    y:$scope.sachinData[1][heading]
                  };
                  console.log(obj);
                }

       };
                
  $scope.getCsv = function(){
    dataFactory.getData()
                .then(function(result){
                    $scope.sachinData=dataFactory.processData(result.data);
                    
                    $scope.isFetched=true;
                    
                     $scope.prepareGraphData(); 
      
                },function(error){
                  console.log(error);
                  return error;
                });
  };              

  $scope.getCsv();
      
      $scope.viewLoaded = true;
  
}]);
