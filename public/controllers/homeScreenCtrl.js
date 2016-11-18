mainApp.controller("homeScreenCtrl", function(SERVER_INFO, $scope, $http) {
    console.log("homeScreenCtrl");
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;

    $scope.logout = function() {
        console.log("Logout");
        window.location.href = serverAddr+"/access";
    }

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




});
