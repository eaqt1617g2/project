adminApp.controller("adminUserController", function(SERVER_INFO, $scope, $http, $location, $routeParams, $uibModal) {
    
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    console.log("Server: "+serverAddr);

    
    $http.get(serverAddr+ '/users')
        .success(function(data) {
            $scope.users = data;
            console.log('No Llego: ' + data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $http.get(serverAddr+ '/users/order')
        .success(function(data) {
            $scope.users = data;
            console.log('Llego: ' + data);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

   
    $scope.createUser = function(user){
        $http.post(serverAddr+ '/users', user)
            .success(function(data) {
                $scope.users.push(user);
                user = {};   
                console.log("Usuario creado correctamente");
                $location.path( "/" );             
            })
            .error(function(data) {
                console.log("Error al añadir usuario");
            });
    };

    
    $scope.deleteUser = function(id) {
        $http.delete(serverAddr+ '/users/'+ id)
            .success(function(data) {
                $scope.users = data;
                console.log("Entrada borrada");
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    $scope.changeUser = function(user){       
        
        $http.put(serverAddr+ '/users/'+ user._id, user)
            .success(function(data) {
                user = {}; 
                $location.path("/");               
            })
            .error(function(data) {
            });
    };

    $scope.getUser = function() {
        console.log("GET USER");
        console.log("USER: ", $routeParams.id);
        
        $http.get(serverAddr+ '/users/'+$routeParams.id)
        .success(function(data) {
            $scope.user = data;
            console.log("get user ok ", $scope.user);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
        
    };

    $scope.openConfirmDeleteUserModal = function(id) {
        var modalInstance = $uibModal.open({
            templateUrl: '/views/modals/adminConfirmDeleteUser.html',
            controller: function($scope, $uibModalInstance) {
                
                $scope.close = function()
                {
                    $uibModalInstance.dismiss();
                }
                $scope.confirm = function()
                {                    
                    $uibModalInstance.close();
                }
            }
        });

        modalInstance.result.then(
            function () {
                console.log("Modal dismiss - Si");
                $scope.deleteUser(id);
            }, function () {
                console.log("Modal cerrado - No");
        });
    };  
    

});