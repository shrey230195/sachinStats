/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
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
  });
  

  $urlRouterProvider.otherwise('home');
}]);

})();