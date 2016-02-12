/**
 * Created by andrew on 27/01/2016.
 */

Meteor.methods({

    stepAdd: function (doc) {

        // Check if user is logged in
        if (! Meteor.userId() ) {
            // Raise an error and send it to the client
            throw new Meteor.Error("logged-out", "You must be logged in to add a step.");
        }

        // Check that all attributes are of the correct type
        // Throws a 'validation-error' if the document does not match the schema
        Steps.schema.validate(doc);

        // Check permissions

        // Save the new model
        Steps.insert(doc, function (error, _id) {
            if (error) {
                throw new Meteor.Error('database-error', "Unable to add a step. Please contact your administrator.");
            } else {
                console.log('Step ' + _id + ' created by user ' + Meteor.userId() + ' at ' + new Date());
                return _id;
            }
        });
    }

});

