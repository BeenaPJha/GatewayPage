(function (w) {
    function ServiceClass() {

    }

    w.ServiceClass = ServiceClass;

    ServiceClass.prototype.login = function () {
        var uname = document.getElementById("user_name").value;
        var pw = document.getElementById("pwd").value;

        var url = "http://localhost/PulseServices/Authenticate.svc/Login";
        var methodType = "POST";
        var param = { username: uname, password: pw };
        return getDataFromServer(url, methodType, param);
    }

    ServiceClass.prototype.getContentObjects = function (Id, url1, methodType, param1) {
        var url1 = "http://localhost/PulseServices/GatewayService.svc/GetContentObjects";
        var methodType = "POST";
        var param1 = { eventId: Id, programKey: "program", resolveCriterias: true, stateKey: 'componentState' };
        return getDataFromServer(url1, methodType, param1);
    }

    getDataFromServer = function (url, methodType, param) {
        return $.ajax({
            url: url,
            type: methodType,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(param)
        })
    }

}(window));
