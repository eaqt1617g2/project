adminApp.controller("adminUserController", function($scope, $http, $location, $routeParams) {
    
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

    
    $http.get('http://localhost:2709/users')
        .success(function(data) {
            $scope.users = data;

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

   
    $scope.createUser = function(user){
        $http.post('http://localhost:2709/users', user)
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
        $http.delete('http://localhost:2709/users/' + id)
            .success(function(data) {
                $scope.users = data;
                console.log("Entrada borrada");
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };




    $scope.changeUser = function(user){       
        
        $http.put('http://localhost:2709/users/'+ user._id, user)
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
        
        $http.get('http://localhost:2709/users/'+$routeParams.id)
        .success(function(data) {
            $scope.user = data;
            console.log("get user ok ", $scope.user);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
        
    };
    

});