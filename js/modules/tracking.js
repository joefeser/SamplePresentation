define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Dependency Tracking", "tracking", [
        new Sample.State("Hello World","helloworld")//,
        //new Sample.State("Dropdown Example","dropdown")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});