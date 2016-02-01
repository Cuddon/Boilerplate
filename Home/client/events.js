/**
 * Created by andrew on 26/01/2016.
 */


Template.Home.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    }

});

