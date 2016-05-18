angular.module('sachinStats')
        
        // Directive for generic chart, pass in chart options
            .directive('hcChart', function () {
                return {
                    restrict: 'E',
                    template: '<div></div>',
                    replace:true,
                    scope: {
                        options: '=',
                        fetched:'=fetched'
                    },
                    link: function (scope, element) {
                         scope.$watch('fetched', function(newValue, oldValue) {
                            
                              if (newValue !== oldValue) {
                                 if(scope.fetched){
                                    Highcharts.chart(element[0], scope.options);
                                    }
                              }
                          }, true);
                       
                    }
                };
            })
            // Directive for pie charts, pass in title and data only    
            .directive('hcPieChart', function () {
                return {
                    restrict: 'E',
                    template: '<div></div>',
                    replace:true,
                    scope: {
                        title: '@',
                        data: '=',
                        fetched:'=fetched'
                    },
                    link: function (scope, element) {
                        scope.$watch('fetched', function(newValue, oldValue) {
                            
                            if (newValue !== oldValue) {
                                if(scope.fetched){ 

                                    Highcharts.chart(element[0], {
                                        chart: {
                                            type: 'pie'
                                        },
                                        title: {
                                            text: scope.title
                                        },
                                        
                                        plotOptions: {
                                            pie: {
                                                borderWidth: 1,
                                                borderColor: '#000',
                                                allowPointSelect: true,
                                                cursor: 'pointer',
                                                innerSize: 100,
                                                depth: 70,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.name}'
                                                }
                                            }
                                        },
                                        series: [{
                                            data: scope.data
                                        }]
                                    });
                                }
                            }
                        }, true);
                    }
                };
            })
            .directive('hiColumnChart',function(){
                return {
                    restrict: 'E',
                    template: '<div></div>',
                    replace:true,
                    scope: {
                        category:'=',
                        data: '=',
                        fetched:'=fetched'
                    },
                    link: function (scope, element) {
                        scope.$watch('fetched', function(newValue, oldValue) {
                            Highcharts.chart(element[0], {
                                chart: {
                                    type: 'column',
                                    
                                },
                                title: {
                                    text: false
                                },
                                xAxis: {
                                    categories: scope.category,
                                    title: {
                                        text: 'Years'
                                    }
                                },
                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: false
                                    },
                                    stackLabels: {
                                        enabled: true,
                                        style: {
                                            fontWeight: 'bold',
                                            color: '#454552'
                                        }
                                    }
                                },
                                legend: {
                                    align: 'right',
                                    x: 0,
                                    verticalAlign: 'top',
                                    y: 0,
                                    floating: true,
                                    backgroundColor: 'white',
                                    borderColor: '#454552',
                                    borderWidth: 1,
                                    shadow: false
                                },
                                tooltip: {
                                    headerFormat: '<b>Year: {point.x}</b><br/>',
                                    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                },
                                plotOptions: {
                                    column: {
                                        stacking: 'normal',
                                        dataLabels: {
                                            enabled: true,
                                            formatter: function() {
                                                if (this.y != 0) {
                                                    return this.y
                                                }
                                            },
                                            color: 'white',
                                            style: {
                                                textShadow: '0 0 3px black'
                                            }
                                        }
                                    }
                                },
                                series:[{
                                            data: scope.data
                                        }]
                            });
                        });
                    }
                };
            });