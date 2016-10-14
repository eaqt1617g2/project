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
                user = {};
                $scope.users = data;
            })
            .error(function(data) {

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
        $scope.formVisibility=false;
        console.log($scope.formVisibility)
        $http.put('http://localhost:2709/users/'+ user._id, user)
            .success(function(data) {
                user = {};
                $scope.users = data;
            })
            .error(function(data) {
            });
    };


    $scope.getUser = function(id) {
        $scope.formVisibility=true;
        $http.get('http://localhost:2709/users/' + id)
            .success(function(data) {
                $scope.user = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    

});