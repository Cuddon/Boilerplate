/**
 * Created by andrew on 26/01/2016.
 */


Template.ReactiveVar.events({
    'click button': function (event, template) {
        // increment the counter when button is clicked
        template.counter.set(template.counter.get() + 1);
    }

});

