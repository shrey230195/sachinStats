;(function() {


  'use strict';


angular.module('sachinStats')

.factory('dataFactory',["$log","$http", function($log, $http) {
  

  var dataFactory = {};

  

  dataFactory.getData = function() {

      return $http({

        method : 'GET',

        url : 'data/sachin.csv'

      });
    },
     dataFactory.processData=function(allText){
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
  }


    return dataFactory;
  }]);



})();
