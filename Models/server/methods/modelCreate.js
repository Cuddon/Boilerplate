/**
 * Created by andrew on 27/01/2016.
 */

Meteor.methods({

    modelCreate: function (doc) {

        // Check if user is logged in
        if (! Meteor.userId() ) {
            // Raise an error and send it to the client
            throw new Meteor.Error("logged-out", "You must be logged in to add a new model.");
        }

        // Check that all attributes are of the correct type
        // Throws a 'validation-error' if the document does not match the schema
        Models.schema.validate(doc);

        // Check permissions

        // Save the new model
        Models.insert(doc, function (error, _id) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('database-error', "Unable to create a new model. Please contact your administrator.");
            } else {
                console.log('Model ' + _id + ' created by user ' + Meteor.userId() + ' at ' + new Date());
                // return the _id of the newly created model
                return _id;
            }
        });
    }

});

