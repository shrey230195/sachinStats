angular.module('sachinStats')
.controller('battingController', ['$scope', '$state','dataFactory' ,function ($scope, $state,dataFactory) {
  
  
  $scope.sachinData = [];
  $scope.processData = function(allText) {
                    // split content based on new line
                    var allTextLines = allText.split(/\r\n|\n/);
                    //console.log('--->',allTextLines);
                    var headers = allTextLines[0].split(',');
                    $scope.lines = [];

                    for ( var i = 0; i < allTextLines.length; i++) {
                        // split content based on comma
                        var data = allTextLines[i].split(',');
                        if (data.length == headers.length) {
                            var tarr = [];
                            for ( var j = 0; j < headers.length; j++) {
                                tarr.push(data[j]);
                            }
                            $scope.lines.push(tarr);
                        }
                    }
                    //console.log(lines);
                    
                    
                    return headers;
                };


  

  $scope.viewLoaded = false;


  

  $scope.$on('viewContentLoaded',function(){
    if(!$scope.viewLoaded){
      console.log("state change hua at batting");
      //$scope.viewContentLoaded();
      
       $scope.chartOptions = {
                    title: {
                        text: 'Temperature data'
                    },
                    xAxis: {
                        categories: $scope.something
                    },

                    series: [{
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }]
                };

                // Sample data for pie chart
                $scope.pieData = [{
                        name: "Microsoft Internet Explorer",
                        y: 56.33
                    }, {
                        name: "Chrome",
                        y: 24.03,
                        sliced: true,
                        selected: true
                    }, {
                        name: "Firefox",
                        y: 10.38
                    }, {
                        name: "Safari",
                        y: 4.77
                    }, {
                        name: "Opera",
                        y: 0.91
                    }, {
                        name: "Proprietary or Undetectable",
                        y: 0.2
                }];

        
      
      $scope.viewLoaded = true;
    }
  });
  
}]);
