define(["knockout", "section"], function(ko, Section) {
    window.ko = ko;
    return function() {
        var self = this;

        //the index file looks for an array of sections (Page Transitions Left and Right)
        this.sections = ko.observableArray([
            new Section("intro"),
            new Section("points"),

            //sample is the name of the template to use as the base
            new Section("declare", "sample"),
            new Section("refresh", "intro"),
            new Section("tracking", "sample"),
            new Section("templating", "sample"),
            new Section("bindings", "sample"),
            new Section("controlflow", "sample"),
            new Section("formfields", "sample"),

            //new Section("one", "sample"),
            //new Section("two", "sample"),
            new Section("bye")
        ]);

        this.updateSection = function(name) {
            var newIndex, i, length, sections = self.sections();

            for (i = 0, length = sections.length; i < length; i++) {
                if (sections[i].name === name) {
                    newIndex = i;
                    break;
                }
            }

            self.index(newIndex === undefined ? 0 : newIndex);
        };

        this.index = ko.observable(0);
        this.currentSection = ko.computed(function() {
            var newSection = self.sections()[self.index()];
            newSection.activate();
            return newSection;
        });

        //go forward unless we are at the end
        this.goNext = function() {
            var index = self.index(),
                newIndex = (index === self.sections().length - 1) ? index : index + 1;

            location.hash = self.sections()[newIndex].name;
        };

        //go back unless we are at the beginning
        this.goPrevious = function() {
            var index = self.index(),
                newIndex = index ? index - 1 : index;

            location.hash = self.sections()[newIndex].name;
        };

        //if the current page has steps, then go forward
        this.stepNext = function() {
            var data = this.currentSection().data();
            if (data.next) {
                return data.next.call(data);
            }
        };

        //if the current page has steps, then go back
        this.stepPrevious = function() {
            var data = this.currentSection().data();
            if (data.previous) {
                return data.previous.call(data);
            }
        };
    };
});