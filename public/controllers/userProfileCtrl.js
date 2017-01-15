mainApp.controller("userProfileCtrl", function(SERVER_INFO, $scope, $http, $routeParams, $rootScope) {
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;

    var currentItemsPage = 0;
    $scope.items = [];

    //Meto el profile_user (usuario que se muestra en el perfil) en el rootScope para no tener que
    //hacer una peticion cuando se navegue entre profile-following-followers

    if($rootScope.profile_user == undefined || $rootScope.profile_user.loginid != $routeParams.loginid)
    {
        $http.get(serverAddr+"/users/"+$routeParams.loginid)
            .success(function(data) {
                console.log("Get user OK")
                $rootScope.profile_user = data;
                for(var i = 0; i < $rootScope.profile_user.followers.length; i++)
                {
                    if($rootScope.profile_user.followers[i]._id == $rootScope.user._id)
                        $rootScope.following = true;
                    else
                        $rootScope.following = false;
                }
            })
            .error(function(data) {
                console.log("Error: "+data);
        });
    }

    $scope.getUserItems = function() {
        $http.get(serverAddr+'/users/'+$routeParams.loginid+'/items', {
            params: {page: currentItemsPage}
            })
            .success(function(data) {
                console.log(JSON.stringify(data));
                $scope.items = $scope.items.concat(data);
            })
            .error(function(err) {
                console.log('Error: ' + err);
        });
    };

    $scope.follow = function() {
        $http.post(serverAddr+ '/users/'+$rootScope.user.loginid+'/follow',
            {"_id": $rootScope.profile_user._id}
        )
            .success(function(data) {
                $rootScope.profile_user = data;
                $rootScope.following = true;
            })
            .error(function(data) {
                console.log("Follow error");
        });
    };

    $scope.unfollow = function() {
        $http.post(serverAddr+ '/users/'+$rootScope.user.loginid+'/unfollow',
            {"_id": $rootScope.profile_user._id}
        )
            .success(function(data) {
                $rootScope.profile_user = data;
                $rootScope.following = false;
            })
            .error(function(data) {
                console.log("Unfollow error");
        });
    };

    /*
    $scope.items = [
        {
            title: "Camisa de invierno en REBAJAS!",
            num_comments: "10",
            likes: "58",
            author: "Scarlet88",
            date: "2016-10-07T17:40:11.071Z",
            pic_url: "../assets/imgs/placeholder.jpg"
        },
        {
            title: "Pantalones tejanos a mitad de precio",
            num_comments: "10",
            likes: "5",
            author: "Scarlet88",
            date: "2016-10-07T17:40:11.071Z",
            pic_url: "../assets/imgs/placeholder.jpg"
        },
        {
            title: "Liquidación de ropa de verano",
            num_comments: "108",
            likes: "58",
            author: "Scarlet88",
            date: "2016-10-07T17:40:11.071Z",
            pic_url: "../assets/imgs/placeholder.jpg"
        },
        {
            title: "Ropa de hombre rabajada",
            num_comments: "10",
            likes: "56",
            author: "Scarlet88",
            date: "2016-10-07T17:40:11.071Z",
            pic_url: "../assets/imgs/placeholder.jpg"
        },
        {
            title: "Pantalones tejanos a mitad de precio",
            num_comments: "3",
            likes: "58",
            author: "Scarlet88",
            date: "2016-10-07T17:40:11.071Z",
            pic_url: "../assets/imgs/placeholder.jpg"
        }
    ];

    $scope.user = {
        loginid: "Scarlet88",
        name: "Scarlett",
        last_name: "Johansson",
        email: "scarlet.johansson@gmail.com",
        creation_date: "2016-10-07T17:40:11.071Z",
        last_login_date: "2016-10-07T17:40:11.071Z",
        followers: "65",
        following: "54",
        items: "6",
        profile_pic_url: "../assets/imgs/profileTestPic3.png"
    };
    */

});
