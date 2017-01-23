var BASE_URL = "http://localhost:2709";
/* 10.193.187.178 */

angular.module('app.controllers', [])
  //angular google maps
  .controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

  }])

  .controller('lastMinuteDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.usuario = $rootScope.userLogued;
    $rootScope.serverAdr = "http://localhost:2709";
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
      $http.get(BASE_URL + '/users/'+ item).success(function(data) {
        $scope.users = {};
        $rootScope.itemsUsers = {}
        $rootScope.userFriend = data;
        console.log("Usuario", $rootScope.userFriend);
        for(var i = 0; i < $rootScope.userFriend.followers.length; i++)
        {
          if($rootScope.userFriend.followers[i]._id == $rootScope.userLogued._id)
            $rootScope.followed = true;
          else
            $rootScope.followed = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/items/'+ item).success(function(data) {
        $rootScope.itemDetail = data;
        console.log("Item", $rootScope.itemDetail);
        for(var i = 0; i < $rootScope.itemDetail.likes.length; i++)
        {
          if($rootScope.itemDetail.likes[i] == $rootScope.userLogued._id)
            $scope.liked = true;
          else
            $scope.liked = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes al item!',
          });
        });
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };


  }])

  .controller('usersDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    var currentItemsPage = 0;
    $scope.UserID = $rootScope.usuarioID; //Obtenemos ID de la URI
    console.log("Usuario", $scope.UserID);
    $scope.users = {};
    $scope.items = {};
    $rootScope.itemsUsers = {}
    $scope.usuario = {};

    $http.get(BASE_URL + '/users/'+ $scope.UserID).success(function(data) {
      $scope.users = {};
      $rootScope.userFriend = data;
      $scope.usuario = $rootScope.userFriend;
      console.log("Usuario", $rootScope.userFriend);
      console.log("Usuario", $scope.usuario);

      for(var i = 0; i < $rootScope.userFriend.followers.length; i++)
      {
        if($rootScope.userFriend.followers[i]._id == $rootScope.userLogued._id)
          $rootScope.followed = true;
        else
          $rootScope.followed = false;
      }
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
      $http.get(BASE_URL + '/users/'+ item).success(function(data) {
        $scope.users = {};
        $rootScope.itemsUsers = {}
        $rootScope.userFriend = data;
        console.log("Usuario", $rootScope.userFriend);
        for(var i = 0; i < $rootScope.userFriend.followers.length; i++)
        {
          if($rootScope.userFriend.followers[i]._id == $rootScope.userLogued._id)
            $rootScope.followed = true;
          else
            $rootScope.followed = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/items/'+ item).success(function(data) {
        $rootScope.itemDetail = data;
        console.log("Item", $rootScope.itemDetail);
        for(var i = 0; i < $rootScope.itemDetail.likes.length; i++)
        {
          if($rootScope.itemDetail.likes[i] == $rootScope.userLogued._id)
            $scope.liked = true;
          else
            $scope.liked = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes al item!',
          });
        });
      $rootScope.itemID = {}
      $rootScope.usuarioID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };

    $scope.follow = function(usuario) {
      $http.post(BASE_URL + '/users/'+ $rootScope.userLogued.loginid+'/follow',{"_id": usuario}).success(function(data) {
          console.log("Usuario", usuario);
          $scope.usuario = {};
          $rootScope.userFriend = data;
          $rootScope.followed = true;
        })
        .error(function(data) {
          console.log("Follow error");
        });
    };

    $scope.unfollow = function(usuario) {
      console.log("Usuario", usuario);
      $http.post(BASE_URL + '/users/'+ $rootScope.userLogued.loginid +'/unfollow',{"_id": usuario}).success(function(data) {
          console.log("Usuario", usuario);
          $rootScope.userFriend = data;
          $rootScope.followed = false;
        })
        .error(function(data) {
          console.log("Unfollow error");
        });
    };

    $scope.getUserItems = function() {
      $http.get(BASE_URL+'/users/'+ $rootScope.userFriend.loginid +'/items', {
        params: {page: currentItemsPage}
      })
        .success(function(data) {
          console.log(JSON.stringify(data));
          $rootScope.itemsUsers = {};
          $rootScope.itemsUsers = data;
        })
        .error(function(err) {
          console.log('Error: ' + err);
        });
    };


  }])

  .controller('perfilDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    var currentItemsPage = 0;
    $scope.users = {};
    $scope.items = {};
    $rootScope.itemsUsers = {}
    $scope.usuario = $rootScope.userLogued;
    console.log('logueado', $scope.usuario );


    $scope.verUsuario = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/users/'+ item).success(function(data) {
        $scope.users = {};
        $rootScope.itemsUsers = {}
        $rootScope.userFriend = data;
        console.log("Usuario", $rootScope.userFriend);
        for(var i = 0; i < $rootScope.userFriend.followers.length; i++)
        {
          if($rootScope.userFriend.followers[i]._id == $rootScope.userLogued._id)
            $rootScope.followed = true;
          else
            $rootScope.followed = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/items/'+ item).success(function(data) {
        $rootScope.itemDetail = data;
        console.log("Item", $rootScope.itemDetail);
        for(var i = 0; i < $rootScope.itemDetail.likes.length; i++)
        {
          if($rootScope.itemDetail.likes[i] == $rootScope.userLogued._id)
            $scope.liked = true;
          else
            $scope.liked = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes al item!',
          });
        });
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

          $rootScope.itemsUsers = {}
          $scope.users = {};
          $rootScope.itemsUsers = data;
          console.log("Items", $rootScope.itemsUsers);
        })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a items!',
            template: 'Introduce bien los datos!'
          });
        });
    }

    $scope.getUserItems = function() {
      $http.get(BASE_URL+'/users/'+ $scope.usuario.loginid +'/items', {
        params: {page: currentItemsPage}
      })
        .success(function(data) {
          console.log(JSON.stringify(data));
          $rootScope.itemsUsers = {};
          $rootScope.itemsUsers = data;
        })
        .error(function(err) {
          console.log('Error: ' + err);
        });
    };




  }])

  .controller('detailDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.ItemID = $rootScope.itemID; //Obtenemos ID de la URI
    console.log("Usuario", $scope.ItemID);
    $scope.item = {}
    $rootScope.comments = {}
    $rootScope.itemDetail = {}
    $scope.newComment = {}
    $scope.currentCommentsPage = 0;

    $http.get(BASE_URL + '/items/'+$scope.ItemID).success(function(data) {
        $rootScope.itemDetail = data;
        console.log("Item", $rootScope.itemDetail);
        for(var i = 0; i < $rootScope.itemDetail.likes.length; i++)
        {
          if($rootScope.itemDetail.likes[i] == $rootScope.userLogued._id)
            $scope.liked = true;
          else
            $scope.liked = false;
        }
      })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes al item!',
        });
      });

    $scope.getComments = function() {
      $http.get(BASE_URL+'/items/'+$rootScope.itemDetail._id+'/comments', {params: {page: $scope.currentCommentsPage}}).success(function(data) {
        $rootScope.comments = data;
        console.log(data)
      })
        .error(function(data) {
          console.log("Error: "+data);
        });
    }

    $scope.postComment = function() {
      if($scope.newComment == undefined || $scope.newComment.content == "") {
        console.log("Empty comment");
        return;
      }
      $scope.newComment.author = $rootScope.userLogued._id;
      console.log("Postin comment: "+JSON.stringify($scope.newComment));
      $http.post(BASE_URL+ '/items/'+$rootScope.itemDetail._id+'/comments', $scope.newComment).success(function(data) {
          $rootScope.comments = data;
          console.log("Comentario creado correctamente");
        })
        .error(function(data) {
          console.log("Error al añadir comentario");
        });
      $scope.newComment = undefined;
      $http.get(BASE_URL + '/items/'+$scope.ItemID).success(function(data) {
        $rootScope.itemDetail = data;
        console.log("Item", $rootScope.itemDetail);
        for(var i = 0; i < $rootScope.itemDetail.likes.length; i++)
        {
          if($rootScope.itemDetail.likes[i] == $rootScope.userLogued._id)
            $scope.liked = true;
          else
            $scope.liked = false;
        }
      })
    }


    $scope.verUsuario = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/users/'+ item).success(function(data) {
        $scope.users = {};
        $rootScope.itemsUsers = {}
        $rootScope.userFriend = data;
        console.log("Usuario", $rootScope.userFriend);
        for(var i = 0; i < $rootScope.userFriend.followers.length; i++)
        {
          if($rootScope.userFriend.followers[i]._id == $rootScope.userLogued._id)
            $rootScope.followed = true;
          else
            $rootScope.followed = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.like = function() {
      $http.post(BASE_URL+ '/items/'+$rootScope.itemDetail._id+'/like',
        {"_id": $rootScope.userLogued._id}
      )
        .success(function(data) {
          $scope.item = {};
          $rootScope.itemDetail = data;
          $scope.liked = true;
        })
        .error(function(data) {
          console.log("Like error");
        });
    }
    $scope.dislike = function() {
      $http.post(BASE_URL+ '/items/'+$rootScope.itemDetail._id+'/dislike',
        {"_id": $rootScope.userLogued._id}
      )
        .success(function(data) {
          $scope.item = {};
          $rootScope.itemDetail = data;
          $scope.liked = false;
        })
        .error(function(data) {
          console.log("Dislike error");
        });
    }


  }])

  .controller('searchCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.filtro = {};
    $scope.users = {};
    $scope.usuario = {};
    $scope.usuarios = {};
    $rootScope.searchUser = false;

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
          $rootScope.searchUser = true;

        })
        .error(function(data) {
          console.log($scope.user)
          console.log('Error: ' + data);
        });
    };

    $scope.verUsuario = function(item) {
      $scope.logued = $rootScope.userLogued.loginid
      console.log(item)
      console.log($scope.logued)
      if (item == $scope.logued) {
        console.log("Mismo usuario")
        $state.go('tabsControllerNormal.perfilDefaultPage', {}, {reload: true});
      }
      else {
        console.log("Usuario diferente")
        $http.get(BASE_URL + '/users/' + item).success(function (data) {
          $scope.users = {};
          $rootScope.itemsUsers = {}
          $rootScope.userFriend = data;
          console.log("Usuario", $rootScope.userFriend);
          for (var i = 0; i < $rootScope.userFriend.followers.length; i++) {
            if ($rootScope.userFriend.followers[i]._id == $rootScope.userLogued._id)
              $rootScope.followed = true;
            else
              $rootScope.followed = false;
          }
        })
          .error(function (data) {
            console.log('Error: ' + data);
            var alertPopup = $ionicPopup.alert({
              title: 'No accedes a usuarios!',
              template: 'Introduce bien los datos!'
            });
          });
        $rootScope.usuarioID = {}
        $rootScope.usuarioID = item;
        logued = $rootScope.userLogued.loginid
        console.log("Id Usuario", item)
        console.log("Id Usuario logueado", logued)
        $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
      }
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

    $scope.modificarPassword = function() {
      if ($scope.newUser.password == $scope.newUser.confirm_password) {
        var postUser = {
          password: $scope.password
        };
        console.log('PostUser: ' + postUser);
        $http.put(BASE_URL + '/users/' + $rootScope.userLogued.loginid+"/edit/password", postUser).success(function (data) {
          $scope.newUser = {}; // Borramos los datos del formulario
          $scope.usuario = {};
          $rootScope.userLogued = data;
        })
      }
      else {
        var alertPopup = $ionicPopup.alert({
          title: 'Escribe bien la contraseña!'
        });
      }
    };

    $scope.modificarName = function() {
      $rootScope.userLogued.displayname = $scope.newUser.displayname;
      var postUser = {
        displayname: $scope.newUser.displayname
      };
      console.log('PostUser: ' + postUser);
      $http.put(BASE_URL + '/users/' + $rootScope.userLogued.loginid+"/edit/displayname", postUser).success(function (data) {
        $scope.newUser = {}; // Borramos los datos del formulario
        console.log($rootScope.userLogued)
      })
        .error(function (data) {
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

    var currentItemsPage = 0;
    $scope.item = {}
    $rootScope.itemsDiscover = {}
    $http.get(BASE_URL+'/items/discover', {params: {page: currentItemsPage}}).success(function(data) {
      $rootScope.itemsDiscover = data;
      console.log(data)
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });


    $scope.verUsuario = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/users/'+ item).success(function(data) {
        $scope.users = {};
        $rootScope.itemsUsers = {}
        $rootScope.userFriend = data;
        console.log("Usuario", $rootScope.userFriend);
        for(var i = 0; i < $rootScope.userFriend.followers.length; i++)
        {
          if($rootScope.userFriend.followers[i]._id == $rootScope.userLogued._id)
            $rootScope.followed = true;
          else
            $rootScope.followed = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/items/'+ item).success(function(data) {
        $rootScope.itemDetail = data;
        console.log("Item", $rootScope.itemDetail);
        for(var i = 0; i < $rootScope.itemDetail.likes.length; i++)
        {
          if($rootScope.itemDetail.likes[i] == $rootScope.userLogued._id)
            $scope.liked = true;
          else
            $scope.liked = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes al item!',
          });
        });
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };


  }])

  .controller('friendsDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    var currentItemsPage = 0;
    $scope.item = {}
    $rootScope.itemsFriends = {}
    $http.get(BASE_URL+'/items/friends', {params: {page: currentItemsPage, id: $rootScope.userLogued._id}}).success(function(data) {
      $rootScope.itemsFriends = data;
      console.log(data)
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });

    $scope.verUsuario = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/users/'+ item).success(function(data) {
        $scope.users = {};
        $rootScope.itemsUsers = {}
        $rootScope.userFriend = data;
        console.log("Usuario", $rootScope.userFriend);
        for(var i = 0; i < $rootScope.userFriend.followers.length; i++)
        {
          if($rootScope.userFriend.followers[i]._id == $rootScope.userLogued._id)
            $rootScope.followed = true;
          else
            $rootScope.followed = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes a usuarios!',
            template: 'Introduce bien los datos!'
          });
        });
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $http.get(BASE_URL + '/items/'+ item).success(function(data) {
        $rootScope.itemDetail = data;
        console.log("Item", $rootScope.itemDetail);
        for(var i = 0; i < $rootScope.itemDetail.likes.length; i++)
        {
          if($rootScope.itemDetail.likes[i] == $rootScope.userLogued._id)
            $scope.liked = true;
          else
            $scope.liked = false;
        }
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No accedes al item!',
          });
        });
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };


  }])

  .controller('loginCtrl', ['$cordovaOauth','$scope','$rootScope', '$http', '$ionicPopup', '$stateParams','$state', function ($cordovaOauth, $scope, $rootScope, $http, $ionicPopup, $stateParams, $state) {

    $scope.User = {};

    $scope.loginNormal = function (user) {
      console.log(user);
      $http.post(BASE_URL + '/auth/app/login', $scope.User)
        .success(function (response) {
          console.log(response);
          $rootScope.userLogued = response;
          $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
        })
        .error(function (err) {
          $ionicPopup.alert({
            title: 'Error',
            template: 'User or password wrong'
          });
          console.log('Error: '+err);
        });
    };
    $scope.Register = function () {
      $state.go('tabsControllerLogin.register', {}, {reload: true});
    };
    $scope.main = function () {
      $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
    };


    $scope.loginFacebook = function () {
      $cordovaOauth.facebook("343051082715858", ["email","user_website"], {"auth_type": "rerequest"}).then(function(result) {
        console.log(JSON.stringify(result));
        var token = result.access_token;
        console.log(token);
        // we get the user info with the login token
        $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: token, fields: "id,name,picture", format: "json" }}).then(function(result) {
          console.log(result.data);
          console.log(result.data.id);
          console.log(result.data.name);
          console.log(result.data.picture.data.url);
          var user = {
            id: result.data.id,
            name: result.data.name,
            picture: result.data.picture.data.url
          };
          //Make a call to our api and make the final login procees
          $http.post(BASE_URL + '/auth/app/facebook', user)
            .success(function (response) {
              console.log(response);
              console.log('success log!');
             // $rootScope.UserID = response._id;
              $rootScope.userLogued = response;
              //window.localStorage.setItem("facebook", user.id);
              $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
            })
            .error(function (err) {
              console.log('error log!');
              $ionicPopup.alert({
                title: 'Error',
                template: 'User or password wrong'
              });
              console.log('Error: '+err);
            });

        }, function(error) {
          alert("Error!");
          console.log(error);
        });
      }, function(error) {
        console.log(JSON.stringify(error));
      });
    };

    $scope.loginTwitter = function () {
      $cordovaOauth.twitter("n97MUo0VUGuKqOP0tcw3Faz4b", "nOmFm4p2yRnqyOTl6iUd7ESZ6kPDSNXXLtY1bV5a3U8maSVVjH").then(function(result) {
        console.log(JSON.stringify(result));
        $http.post(BASE_URL + '/auth/app/twitter', result)
          .success(function (response) {
            console.log(response);
            $rootScope.UserID = response._id;
            $rootScope.User = response;
            window.localStorage.setItem("twitter", result.user_id);
            $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
          })
          .error(function (err) {
            $ionicPopup.alert({
              title: 'Error',
              template: 'User or password wrong'
            });
            console.log('Error: '+err);
          });

      }, function(error) {
        alert("Error!");
        console.log(error);
      });
    };
/*
    $scope.loginGoogle2 = function() {
      $cordovaOauth.google("1063612097703-4grhbrh1kl316idhctspnf356uk0hl17.apps.googleusercontent.com", ["https://localhost/auth/google"]).then(function(result) {
        console.log(JSON.stringify(result));
      }, function(error) {
        console.log(error);
      });
    }
*/


    /*
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
     */

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
          email: $scope.newUser.email,
          displayname:  $scope.newUser.name + ' ' + $scope.newUser.last_name,
          provider: 'local'
        };
        $http.post(BASE_URL + '/signup', postUser).success(function (data) {
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
            var User = {
              email: $scope.newUser.email,
              password: $scope.newUser.password
            };
            $http.post(BASE_URL + '/auth/app/login', User)
              .success(function (response) {
                console.log(response);
                //$rootScope.UserID = response._id;
                $rootScope.userLogued = response;
                // console.log($scope.user.username);
                // window.localStorage.setItem("userid", response._id);
                $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
              })
              .error(function (err) {
                $ionicPopup.alert({
                  title: 'Error',
                  template: 'User or password wrong'
                });
                console.log('Error: '+err);
              });
          });
      }
      else {
        var alertPopup = $ionicPopup.alert({
          title: 'Escribe bien la contraseña!'
        });
        $timeout(function () {
          alertPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
      }
    };

  }])

  .controller('crearItemCtrl', ['$scope', '$ionicLoading', '$ionicPlatform', '$http', '$cordovaCamera', '$cordovaFile', '$cordovaImagePicker', '$state', function ($scope, $ionicLoading, $ionicPlatform, $http, $cordovaCamera, $cordovaFile, $cordovaImagePicker, $state) {
    var vm = this;
    var base64;
    var position = {
      "latitud": 41.4,
      "longitud": 2.2
    };
    var geocoder = new google.maps.Geocoder();

    var map;
    var marker;
    $http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDUm1CEWcBg8E3PKVT715J9uLKr9F-wFKY")
      .success(function(data) {
        position.latitud  = data.location.lat;
        position.longitud = data.location.lng;
        var myLatlng = new google.maps.LatLng(position.latitud, position.longitud);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        marker = new google.maps.Marker({
          draggable:true,
          position: {
            lat: position.latitud,
            lng: position.longitud
          },
          map: map,
          title: 'Hello World!'
        });
        geocoder.geocode({
          latLng: myLatlng
        }, function(responses) {
          if (responses && responses.length > 0) {
            $scope.$apply(function () {
              $scope.address = responses[0].formatted_address;
            });
          } else {
            console.log('Cannot determine address at this location.');
          }
        });
        marker.addListener('dragend', function(e){
          position.longitud = e.latLng.lng();
          position.latitud = e.latLng.lat();
          console.log(position);
          geocoder.geocode({
            latLng: e.latLng
          }, function(responses) {
            if (responses && responses.length > 0) {
              console.log(e.latLng);
              $scope.$apply(function () {
                $scope.address = responses[0].formatted_address;
              });
            } else {
              console.log('Cannot determine address at this location.');
            }
          });
        });
        $scope.map = map;
      })
      .error(function(data) {
        console.log("error: " + data);
        var myLatlng = new google.maps.LatLng(position.latitud, position.longitud);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        $scope.map = map;
      });

    $scope.takeImage = function() {
      var options = {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 250,
        targetHeight: 250,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        base64 = imageData;
        console.log("data:image/jpeg;base64," + imageData );
        var base64Blob = base64toBlob(imageData, 'image/jpeg');
        $cordovaFile.writeFile(cordova.file.externalCacheDirectory, 'new_pic.jpg', base64Blob, true).then(
          function(success){
            console.log('success')
            console.log(JSON.stringify(success))
          },
          function(error){
            console.log(error)
          }
        )
        $scope.srcImage = "data:image/jpeg;base64," + imageData;
        resolveLocalFileSystemURL('cdvfile://localhost/cache-external/new_pic.jpg', function(entry) {
          var nativePath = entry.toURL();
          console.log('Native URI: ' + nativePath);
          //$scope.srcImage = nativePath;

        });

      }, function(err) {
        // erro
        console.log(err);
      });
    }//


    function base64toBlob(base64Data, contentType) {
      contentType = contentType || '';
      var sliceSize = 1024;
      var byteCharacters = atob(base64Data);
      var bytesLength = byteCharacters.length;
      var slicesCount = Math.ceil(bytesLength / sliceSize);
      var byteArrays = new Array(slicesCount);

      for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return new Blob(byteArrays, { type: contentType });
    }
    function makeid()
    {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 25; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
    $scope.item = {};
    $scope.uploadItem = function(){
      var data = {
        author: "rosa",
        title: $scope.item.title,
        base64: base64,
        pic_id: makeid()+".jpg"
      }
      $http.post(BASE_URL + '/items/additemApp',data).success(function(data) {

          $scope.usuario = {};
          $scope.users = {};
          $scope.usuario = data;
          //$rootScope.following = true;
          $state.go('tabsController.lastMinuteDefaultPage');
        })
        .error(function(data) {
          console.log("Follow error");
        });
    }

    $scope.getImageSaveContact = function() {
      // Image picker will load images according to these settings
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      function getFileContentAsBase64(path,callback){
        window.resolveLocalFileSystemURL(path, gotFile, fail);

        function fail(e) {
          alert('Cannot found requested file');
        }

        function gotFile(fileEntry) {
          fileEntry.file(function(file) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
              var content = this.result;
              callback(content);
            };
            // The most important point, use the readAsDatURL Method from the file plugin
            reader.readAsDataURL(file);
          });
        }
      }


      $cordovaImagePicker.getPictures(options).then(function (imageData) {
        console.log(imageData[0]);
        getFileContentAsBase64(imageData[0],function(base64Image){
          //window.open(base64Image);
          console.log("ya");
          $scope.$apply(function () {
            $scope.srcImage = base64Image;
          });
          var res = base64Image.split(",");
          base64 = res[1];
          console.log(base64);
          // Then you'll be able to handle the myimage.png file as base64
        })
      }, function(error) {
        console.log('Error: ' + JSON.stringify(error));    // In case of error
      });
    };
  }])
