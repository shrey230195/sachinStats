
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
  .state('home.winLoss', {
    url: '/winLoss',
    controller: 'winLossController',
    views: {
      'home': {
        templateUrl: "views/winLoss.html"
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
  });
  

  $urlRouterProvider.otherwise('home');
}]);

})();