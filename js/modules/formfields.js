define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Form Fields", "formfields", [
        new Sample.State("The click binding","click-1"),
        new Sample.State("The click binding","click-2")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});