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
                    var stats={
                      batting_score:[],
                      wickets :[],
                      runs_conceded :[],
                      catches:[],
                      stumps:[],
                      opposition:[],
                      ground:[],
                      date :[], 
                      match_result :[],
                      result_margin:[],
                      toss:[],
                      batting_innings:[],
                    }
                    var fuck=[];
                    
                    for (var i=0;i<lines[0].length;i++){

                        
                        for(var line in lines){
                          if(line==0){
                            continue;
                          }
                          switch(i){
                            case 0: stats.batting_score.push(lines[line][i]);    
                                    break;
                            case 1: stats.wickets.push(lines[line][i]);    
                                    break;
                            case 2: stats.runs_conceded.push(lines[line][i]);    
                                    break;
                            case 3: stats.catches.push(lines[line][i]);    
                                    break;
                            case 4: stats.stumps.push(lines[line][i]);    
                                    break;
                            case 5: stats.opposition.push(lines[line][i]);    
                                    break;
                            case 6: stats.ground.push(lines[line][i]);    
                                    break;
                            case 7: stats.date.push(lines[line][i]);    
                                    break;
                            case 8: stats.match_result.push(lines[line][i]);    
                                    break;
                            case 9: stats.result_margin.push(lines[line][i]);    
                                    break;
                            case 10: stats.toss.push(lines[line][i]);    
                                    break;
                            case 11: stats.batting_innings.push(lines[line][i]);    
                                    break;
                            
                          }
                              
                            
                          
                          //console.log(lines[0][i],'---->',lines[line][i]);
                        
                      }

                      
                    }
                    return stats;

                    
  }


    return dataFactory;
  }]);



})();
