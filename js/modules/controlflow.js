define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Control Flow", "controlflow", [
        new Sample.State("the foreach binding: array","foreach-1"),
        new Sample.State("the foreach binding: add/remove","foreach-2"),
        new Sample.State("the foreach binding: $data","foreach-3")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});