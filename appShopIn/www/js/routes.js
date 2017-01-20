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
      url: '/tabsController',
      templateUrl: 'templates/tabsController.html',
      abstract:true
  })
  .state('tabsControllerNormal', {
    url: '/tabsControllerNormal',
    templateUrl: 'templates/tabsControllerNormal.html',
    abstract:true
  })

  .state('tabsControllerUser', {
    url: '/tabsControllerUser',
    templateUrl: 'templates/tabsControllerUser.html',
    abstract:true
  })

  .state('tabsController.lastMinuteDefaultPage', {
    url: '/lastMinute',
      views: {
          'tab1': {
              templateUrl: 'templates/lastMinuteDefaultPage.html',
              controller: 'lastMinuteDefaultPageCtrl'
          }
      }
  })

  .state('tabsController.discoverDefaultPage', {
      url: '/discover',
      views: {
          'tab2': {
              templateUrl: 'templates/discoverDefaultPage.html',
              controller: 'discoverDefaultPageCtrl'
          }
      }
  })

  .state('tabsController.friendsDefaultPage', {
      url: '/friends',
      views: {
          'tab3': {
              templateUrl: 'templates/friendsDefaultPage.html',
              controller: 'friendsDefaultPageCtrl'
          }
      }
  })

  .state('tabsControllerUser.usersDefaultPage', {
      url: '/users/:loginid',
      views: {
        'tab7': {
          templateUrl: 'templates/usersDefaultPage.html',
          controller: 'usersDefaultPageCtrl'
        }
      }
  })

  .state('tabsControllerNormal.perfilDefaultPage', {
    url: '/perfil/:loginid',
    views: {
      'tab4': {
        templateUrl: 'templates/perfilDefaultPage.html',
        controller: 'perfilDefaultPageCtrl'
      }
    }
  })

  .state('tabsControllerUser.detailDefaultPage', {
    url: '/detail/:id',
    views: {
      'tab8': {
        templateUrl: 'templates/detailDefaultPage.html',
        controller: 'detailDefaultPageCtrl'
      }
    }
  })

  .state('tabsControllerNormal.searchDefaultPage', {
    url: '/search',
    views: {
      'tab5': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsControllerNormal.herramientasDefaultPage', {
    url: '/herramientas',
    views: {
      'tab6': {
        templateUrl: 'templates/herramientas.html',
        controller: 'herramientasCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/login/access')



});
