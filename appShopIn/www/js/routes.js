angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsControllerLogin', {
      url: '/login',
      templateUrl: 'templates/tabsControllerLogin.html',
      abstract:true
  })

  .state('tabsControllerLogin.login', {
      url: '/access',
      views: {
          'tab1': {
              templateUrl: 'templates/login.html',
              controller: 'loginCtrl'
          }
      }
  })

  .state('tabsControllerLogin.register', {
      url: '/register',
      views: {
          'tab2': {
              templateUrl: 'templates/register.html',
              controller: 'registerCtrl'
          }
      }
  })

  .state('tabsController', {
      url: '/page4',
      templateUrl: 'templates/tabsController.html',
      abstract:true
  })

  .state('tabsController.lastMinuteDefaultPage', {
    url: '/page5',
      views: {
          'tab1': {
              templateUrl: 'templates/lastMinuteDefaultPage.html',
              controller: 'lastMinuteDefaultPageCtrl'
          }
      }
  })

  .state('tabsController.discoverDefaultPage', {
      url: '/page6',
      views: {
          'tab2': {
              templateUrl: 'templates/discoverDefaultPage.html',
              controller: 'discoverDefaultPageCtrl'
          }
      }
  })

  .state('tabsController.friendsDefaultPage', {
      url: '/page7',
      views: {
          'tab3': {
              templateUrl: 'templates/friendsDefaultPage.html',
              controller: 'friendsDefaultPageCtrl'
          }
      }
  })

  .state('tabsController.perfilDefaultPage', {
    url: '/page8',
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



$urlRouterProvider.otherwise('/login/access')



});
