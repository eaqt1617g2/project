adminApp.controller("adminUserListController", function($scope, $http) {
    
    /*
    $scope.users = [
        {name:'Carlos',email:'carlos@gmail.com'},
        {name:'Pepe',email:'pepe@gmail.com'},
        {name:'Juan',email:'juan@gmail.com'},
        {name:'Ana',email:'ana@gmail.com'},
        {name:'Jordi',email:'jordi@gmail.com'}
    ];
    */

    
    $http.get('http://localhost:2709/users')
        .success(function(data) {
            $scope.users = data;

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


   
    $scope.createUser = function(user){
        $http.post('http://localhost:2709/api/users', user)
            .success(function(data) {
                user = {};
                $scope.users = data;

            })
            .error(function(data) {

            });
    };

    
    $scope.deleteUser = function(id) {
        $http.delete('/api/users/' + id)
            .success(function(data) {
                $scope.users = data;
                console.log("Entrada borrada");
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
    

});