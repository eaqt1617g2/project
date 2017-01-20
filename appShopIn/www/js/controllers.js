var BASE_URL = "http://localhost:2709";

angular.module('app.controllers', [])
//angular google maps
  .controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

  }])

  .controller('lastMinuteDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.usuario = $rootScope.userLogued;
    console.log('logueado', $scope.usuario );
    $http.get(BASE_URL + '/items').success(function (data) {
      $scope.items = {};
      $scope.users = {};
      $scope.items = data;
      console.log("Items", $scope.items);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a items!',
          template: 'Introduce bien los datos!'
        });
      });

    $scope.verUsuario = function(item) {
      console.log(item)
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };


  }])

  .controller('usersDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.UserID = $rootScope.usuarioID; //Obtenemos ID de la URI
    console.log("Usuario", $scope.UserID);
    $scope.users = {};
    $scope.items = {};
    $scope.usuario = {};

    $http.get(BASE_URL + '/users/'+$scope.UserID).success(function(data) {
      $scope.users = {};
      $scope.usuario = data;
      console.log("Usuario", $scope.usuario);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a usuarios!',
          template: 'Introduce bien los datos!'
        });
      });

    $scope.verUsuario = function(item) {
      console.log(item)
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };

    $scope.follow = function(user, usuario) {
      $http.post(BASE_URL + '/users/'+ usuario.loginid+'/follow',{"_id": user._id}).success(function(data) {
        console.log("Usuario", usuario);
        console.log("User", user);
        $scope.usuario = {};
        $scope.users = {};
        $scope.usuario = data;
        $rootScope.following = true;
      })
        .error(function(data) {
          console.log("Follow error");
        });
    };

    $scope.unfollow = function(user, usuario) {
      $http.post(BASE_URL+ '/users/'+usuario.loginid +'/unfollow',{"_id": user._id}).success(function(data) {
        console.log("Usuario", $scope.usuario);
        console.log("User", $scope.user);
        $scope.usuario = data;
        $rootScope.following = false;
      })
        .error(function(data) {
          console.log("Unfollow error");
        });
    };

  }])

  .controller('perfilDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.users = {};
    $scope.items = {};
    $scope.usuario = $rootScope.userLogued;
    console.log('logueado', $scope.usuario );

    $http.get(BASE_URL + '/users/'+$scope.usuario).success(function(data) {
      $scope.users = {};
      $scope.items = {};
      $scope.usuario = data;
      console.log("Usuario", $scope.usuario);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a usuarios!',
          template: 'Introduce bien los datos!'
        });
      });

    $scope.verUsuario = function(item) {
      console.log(item)
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };

    $scope.getUsers = function(){
      $scope.items = {};
      $scope.users = {};
      $http.get(BASE_URL + '/users').success(function (data) {
        $scope.users = data;
        console.log("Usuarios", $scope.users);
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
    }

    $scope.getUsersOrder = function() {
      $scope.items = {};
      $scope.users = {};
      $http.get(BASE_URL + '/users/order').success(function(data) {
        $scope.users = {};
        $scope.users = data;
        console.log("Usuarios", $scope.users);
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
    };

    $scope.selectUser = function(user){
      $http.get(BASE_URL + '/users/'+user._id).success(function(data) {
        $scope.usuario = user;
        $scope.users = {};
        console.log("Usuario", $scope.usuario);
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
    }

    $scope.createItem = function () {
      $scope.newItem = {};
      console.log('Usuario: ' + $scope.usuario.loginid);
      var addPopup = $ionicPopup.confirm({
        title: 'Crear item nuevo',
        template: '<input type="text" placeholder="Titulo" ng-model="newItem.title"> <br> <input type="text" placeholder="Pic ID" ng-model="newItem.pic_id">',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: '<b>Crear</b>',
            type: 'button-positive',
            onTap: function () {
              var postItem = {
                title : $scope.newItem.title,
                author: $scope.usuario.loginid,
                pic_id: $scope.newItem.pic_id
              };
              $http.post(BASE_URL + '/items/additem', postItem)
                .success(function (data) {
                  $scope.newItem = data;
                  console.log('Item creado',$scope.newItem);

                })
                .error(function (data) {
                  console.log('Error: ' + data);
                  var alertPopup = $ionicPopup.alert({
                    title: 'No se ha creado el item!'
                  });
                });
            }
          }
        ]
      });
    };


    $scope.getItems = function(){
      console.log("Loginid", $scope.usuario.loginid);
      $http.get(BASE_URL + '/users/'+$scope.usuario.loginid+'/items').success(function (data) {
        $scope.items = {};
        $scope.users = {};
        $scope.items = data;
        console.log("Items", $scope.items);
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a items!',
            template: 'Introduce bien los datos!'
          });
        });
    }

    $scope.getItemsOrder = function(){
      $http.get(BASE_URL + '/items/order').success(function (data) {
        $scope.items = {};
        $scope.users = {};
        $scope.items = data;
        console.log("Items", $scope.items);
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a items!',
            template: 'Introduce bien los datos!'
          });
        });
    }




  }])

  .controller('detailDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.ItemID = $rootScope.itemID; //Obtenemos ID de la URI
    console.log("Usuario", $scope.ItemID);
    $scope.item = {};
    $http.get(BASE_URL + '/items/'+$scope.ItemID).success(function(data) {
      $scope.item = data;
      console.log("Item", $scope.item);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes al item!',
        });
      });
  }])

  .controller('searchCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.filtro = {};
    $scope.users = {};
    $scope.usuario = {};
    $scope.usuarios = {};

    $scope.getUsersOrder = function() {
      $http.get(BASE_URL + '/users/order').success(function(data) {
        $scope.users = {};
        $scope.usuario = {};
        $scope.users = data;
        console.log("Usuarios", $scope.users);
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
    };

    $scope.buscarUsuarioLoginid = function() {
      console.log($scope.filtro.loginid)
      $http.get(BASE_URL + '/users/'+ $scope.filtro.loginid)
        .success(function(data) {
          console.log($scope.filtro.loginid)
          $scope.filtro = {}; // Borramos los datos del formulario
          $scope.usuario = {};
          $scope.users = {};
          $scope.usuario = data;

        })
        .error(function(data) {
          console.log($scope.user)
          console.log('Error: ' + data);
        });
    };

    $scope.verUsuario = function(item) {
      console.log(item)
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

  }])

  .controller('herramientasCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.usuario = {};
    $scope.newUser = {};
    $scope.filtro = {};

    $scope.buscarUsuarioLoginid = function() {
      console.log($scope.filtro.loginid)
      $http.get(BASE_URL + '/users/'+ $scope.filtro.loginid)
        .success(function(data) {
          $scope.filtro = {}; // Borramos los datos del formulario
          $scope.usuario = {};
          $scope.users = {};
          $rootScope.usuario = data;
        })
        .error(function(data) {
          console.log($scope.user)
          console.log('Error: ' + data);
        });
    };

    $scope.logout = function () {
      $rootScope.userLogued = {};
      var addPopup = $ionicPopup.confirm({
        title: 'Seguro que quieres salir?',
        template: '',
        scope: $scope,
        buttons: [
          {text: 'No'},
          {
            text: '<b>Si</b>',
            type: 'button-positive',
            onTap: function () {
              console.log("Ha salido correctamente.");
              $state.go('tabsControllerLogin.login', {}, {reload: true});
            }
          }
        ]
      });
    };

    $scope.modificarUser = function() {
      var postUser = {
        name: $scope.newUser.name,
        last_name: $scope.newUser.last_name,
        password: $scope.newUser.password,
        email: $scope.newUser.email
      };
      console.log('PostUser: ' + postUser);
      $http.put(BASE_URL + '/users/'+ $scope.usuario._id, postUser).success(function(data) {
        $scope.newUser = {}; // Borramos los datos del formulario
        $scope.usuario = {};
        $rootScope.userLogued = {};
        $rootScope.userLogued = data;
        console.log($scope.usuario)
      })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    // Función para eliminar estudiante
    $scope.removeUser = function() {
      $http.delete(BASE_URL + '/users/'+ $scope.usuario._id)
        .success(function(data) {
          console.log("Usuario eliminado correctamente.");
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

  }])

  .controller('discoverDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.usuario = $rootScope.userLogued;
    console.log('logueado', $scope.usuario );
    $http.get(BASE_URL + '/items').success(function (data) {
      $scope.items = {};
      $scope.users = {};
      $scope.items = data;
      console.log("Items", $scope.items);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a items!',
          template: 'Introduce bien los datos!'
        });
      });

  }])

  .controller('friendsDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

  }])

  .controller('loginCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$stateParams','$state', function ($scope, $rootScope, $http, $ionicPopup, $stateParams, $state) {

    $scope.User = {};

    $scope.loginNormal = function(){
      console.log('user', $scope.User );
      var userLogin = {
        email : $scope.User.email,
        password : $scope.User.password
      };
      $http.post(BASE_URL + '/login', userLogin).success(function (data) {
        console.log("User Logged", data);
        $rootScope.userLogued = data;
        $state.go('tabsController.lastMinute', {}, {reload: true});
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No se ha logueado correctamente!',
            template: 'Introduce bien los datos!'
          });
        });
    }
    $scope.loginFacebook = function(){
      $http.post(BASE_URL + '/auth/facebook').success(function (data) {
        console.log("User Logged", data);
        $rootScope.userLogued = data;
        $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No se ha logueado correctamente!',
            template: 'Introduce bien los datos!'
          });
        });
    }

    $scope.loginTwitter = function(){
      $http.post(BASE_URL + '/auth/twitter').success(function (data) {
        console.log("User Logged", data);
        $rootScope.userLogued = data;
        $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No se ha logueado correctamente!',
            template: 'Introduce bien los datos!'
          });
        });
    }
    $scope.loginGoogle = function(){
      $http.post(BASE_URL + '/auth/google').success(function (data) {
        console.log("User Logged", data);
        $rootScope.userLogued = data;
        $state.go('tabsControllerNormal.lastMinuteDefaultPage', {}, {reload: true});
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No se ha logueado correctamente!',
            template: 'Introduce bien los datos!'
          });
        });
    }
    $scope.loginGoogle2 = function(){
      console.log($scope.User.email)
      $http.get(BASE_URL + '/users/'+ $scope.User.email)
        .success(function(data) {
          $rootScope.userLogued = data;
          console.log($scope.User.email)
          $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
        })
        .error(function(data) {
          console.log($scope.User)
          console.log('Error: ' + data);
        });
    }
  }])

  .controller('registerCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$stateParams','$state', function ($scope, $rootScope, $http, $ionicPopup, $stateParams, $state) {

    $scope.newUser = {};

    // Función para registrar estudiante
    $scope.createUser = function(){
      if ($scope.newUser.password == $scope.newUser.confirm_password) {
        console.log('user', $scope.newUser);
        var postUser = {
          loginid: $scope.newUser.loginid,
          name: $scope.newUser.name,
          last_name: $scope.newUser.last_name,
          password: $scope.newUser.password,
          email: $scope.newUser.email
        };
        $http.post(BASE_URL + '/users/android', postUser).success(function (data) {
          console.log('Registrado correctamente');
          var alertPopup = $ionicPopup.alert({
            title: 'Información',
            template: 'Se ha registrado correctamente, le enseñaremos su página de perfil.'
          });
          console.log($scope.newUser.loginid)
          $rootScope.userLogued = $scope.newUser;
          console.log($scope.newUser)
          $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
          })
          .error(function (data) {
            console.log('Error: ' + data);
            var alertPopup = $ionicPopup.alert({
              title: 'Información',
              template: 'Revisa el formulario'
            });
            $timeout(function () {
              alertPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000);
          });
      }
      else {
        var alertPopup = $ionicPopup.alert({
          title: 'Please repeat the password!'
        });
        $timeout(function () {
          alertPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
      }
    };

  }])
