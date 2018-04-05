
(function () {
    console.log("method is called");

    var ServiceInstance = new ServiceClass();
    var contentObjects;
    var isLoggedIn = false;
    $(document).ready(function () {
        $("#submitBtn").on("click", function () {
            initialize();
        });

    });
    function initialize() {
        getData().then(function () {
            console.log("Initialization complete");
            // updateView();
            transferData();
        })
    }


    function transferData(){
        Display();
    }


    function getData() {

        return ServiceInstance.login().then(function (data) {
            console.log(data);
            return ServiceInstance.getContentObjects(data);
            var eID=data.LoginResult.id[0];
        }).then(function (data) {
                console.log(data);
                contentObjects = data.GetContentObjectsResult.Contentobject;
                isLoggedIn = true;
                return true;
            })


    }

    // function updateView() {
    //     $('#containerFirst').hide();
    //     // get elements and display content objects
    //     for (var j = 0; j < response.GetContentObjectsResult.Contentobject.length; j++) {
    //         console.log("updateView");
    //         var coObj = new ContentObject($("#containerTwo"), contentObjects[0]);
    //         coObj.display();
    //         var coObj2 = new ContentObject($("#containerTwo"), contentObjects[1]);
    //         coObj2.display();
    //         var coObj3 = new Contentobject($("#containerTwo"), contentObjects[2]);
    //         coObj3.display();
    //     }
    // }
})();
