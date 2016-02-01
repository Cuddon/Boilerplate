/**
 * Created by andrew on 26/01/2016.
 */


Template.TemplateSubs.events({
    'click button': function (event, template) {
        // increment the counter when button is clicked

        // Prevent default browser form submit
        event.preventDefault();

        // Server method to increment the counter in the database
        Meteor.call('incrementCounter', function (error) {
            if (error) {
                // Display the error to the client, and stay on the same page
                console.log(error.error, error.reason);
            }
        });

    }

});

