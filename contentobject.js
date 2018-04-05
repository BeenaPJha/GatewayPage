(function (w) {

    ContentObjectClass = function (context, co) {
        this.co = co;
        this.context = context;
        console.log("Constuctor", co.name);

    }

    ContentObjectClass.prototype.display = function (data) {
       $("#containerFirst").hide();
        console.log("Display called");
        var parent = new createElement($('div'));
        var child = new createElement($('div'));
        this.context.append(this.co.name);

    }

    w.ContentObject = ContentObjectClass;

})(window)
