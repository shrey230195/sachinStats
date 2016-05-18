angular.module('sachinStats')
        // Directive for generic chart, pass in chart options
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
                            console.log(newValue,'-------',oldValue);
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
                            console.log(newValue,'-------',oldValue);
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
                                                allowPointSelect: true,
                                                cursor: 'pointer',
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
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
            });