adminApp.controller("adminUserController", function($scope, $http, $location, $routeParams, $uibModal) {
    var ipServer = "http://localhost:2709"
    /*
    $scope.users = [
        {name:'Carlos',email:'carlos@gmail.com'},
        {name:'Pepe',email:'pepe@gmail.com'},
        {name:'Juan',email:'juan@gmail.com'},
        {name:'Ana',email:'ana@gmail.com'},
        {name:'Jordi',email:'jordi@gmail.com'}
    ];
    */
    /* $scope.formVisibility=false;
    $scope.ShowForm=function(){
        $scope.formVisibility=true;
        console.log($scope.formVisibility)
    }*/

    
    $http.get(ipServer+ '/users')
        .success(function(data) {
            $scope.users = data;

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

   
    $scope.createUser = function(user){
        $http.post(ipServer+ '/users', user)
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
        $http.delete(ipServer+ '/users/'+ id)
            .success(function(data) {
                $scope.users = data;
                console.log("Entrada borrada");
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };




    $scope.changeUser = function(user){       
        
        $http.put(ipServer+ '/users/'+ user._id, user)
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
        
        $http.get(ipServer+ '/users/'+$routeParams.id)
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