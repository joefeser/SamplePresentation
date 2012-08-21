define(["knockout"], function(ko) {
    return function() {
        this.title = "Key Concepts";
        this.allPoints = [
            { title: "Declarative Bindings", description: "Easily associate DOM elements with model data using a concise, readable syntax"},
            { title: "Automatic UI Refresh", description: "When your data model's state changes, your UI updates automatically"},
            { title: "Dependency Tracking", description: "Implicitly set up chains of relationships between model data, to transform and combine it"},
            { title: "Templating", description: "Quickly generate sophisticated, nested UIs as a function of your model data"}
        ];

        this.points = ko.observableArray();

        //add the top point to the list of displayed points
        this.next = function() {
            if (this.allPoints.length) {
                this.points.push(this.allPoints.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.points().length) {
                this.allPoints.unshift(this.points.pop());
            }
        };
    };
});