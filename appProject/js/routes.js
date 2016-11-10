angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.lastMinuteDefaultPage', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/lastMinuteDefaultPage.html',
        controller: 'lastMinuteDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.perfilDefaultPage', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/perfilDefaultPage.html',
        controller: 'perfilDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.detailDefaultPage', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/detailDefaultPage.html',
        controller: 'detailDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.discoverDefaultPage', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/discoverDefaultPage.html',
        controller: 'discoverDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.friendsDefaultPage', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/friendsDefaultPage.html',
        controller: 'friendsDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page3',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page2',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page3/page4')

  

});