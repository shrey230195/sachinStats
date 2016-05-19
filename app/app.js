
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
.module('sachinStats', [
  
  'ui.router',
  
  ])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/main_nav.html',
    controller: 'MainController'
  })
  .state('home.sachin', {
    url: '/',
    controller: 'ManageController',
    views: {
      'home': {
        templateUrl: "views/sachin.html"
      }
    }
  })
  .state('home.batting', {
    url: '/batting',
    controller: 'battingController',
    views: {
      'home': {
        templateUrl: "views/batting.html"
      }
    }
  })
  .state('home.runsPerYear', {
    url: '/winLoss',
    controller: 'runsPerController',
    views: {
      'home': {
        templateUrl: "views/runs_per_year.html"
      }
    }
  })
  .state('home.centuries', {
    url: '/centuries',
    controller: 'centuriesController',
    views: {
      'home': {
        templateUrl: "views/centuries.html"
      }
    }
  })
  .state('home.opponent', {
    url: '/opponent',
    controller: 'opponentController',
    views: {
      'home': {
        templateUrl: "views/opponent.html"
      }
    }
  })
  .state('home.opponent.batting',{
    url:'/batting',
    controller:'opponentController',
    views:{
      'opponentBowlBat':{
        templateUrl:"views/opponent_runs.html"
      }
    }
  })
  .state('home.opponent.bowling',{
    url:'/bowling',
    controller:'opponentController',
    views:{
      'opponentBowlBat':{
        templateUrl:"views/opponent_wickets.html"
      }
    }
  }).state('home.centuries.half',{
    url:'/50',
    controller:'centuriesController',
    views:{
      'centuries':{
        templateUrl:"views/half_centuries.html"
      }
    }
  })
  .state('home.centuries.full',{
    url:'/100',
    controller:'centuriesController',
    views:{
      'centuries':{
        templateUrl:"views/full_centuries.html"
      }
    }
  }).state('home.batting.first',{
    url:'/first_innings',
    controller:'battingController',
    views:{
      'batting':{
        templateUrl:"views/batting_first.html"
      }
    }
  })
  .state('home.batting.second',{
    url:'/second_innings',
    controller:'battingController',
    views:{
      'batting':{
        templateUrl:"views/batting_second.html"
      }
    }
  });
  

  $urlRouterProvider.otherwise('home');
}]);

})();