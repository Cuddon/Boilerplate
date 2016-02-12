/**
 * Created by andrew on 26/01/2016.
 */

// A single Redux item
Redux = new Mongo.Collection("redux");

Redux.schema = new SimpleSchema({
    name: {
        label: "Name",
        type: String,
        max: 50
    },
    description: {
        label: "Name",
        type: String,
        max: 256,
        optional: true
    },
    version: {
        label: "Version",
        type: String,
        max: 20,
        optional: true
    },
    notes: {
        label: "Notes",
        type: String,
        max: 1024,
        optional: true
    },

    ownerId: {
        label: "Id of user who currently owns the document",
        type: String,
        regEx: SimpleSchema.RegEx.Id

    },

    createdBy: {
        label: "Id of user who initially created the document",
        type: String,
        autoValue: function () {
            // Force value to be current user] upon insert and prevent updates thereafter.
            if (this.isInsert) {
                return this.userId;
            } else if (this.isUpsert) {
                return {$setOnInsert: this.userId};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            // Force value to be current date (on server) upon insert and prevent updates thereafter.
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    },

    updatedBy: {
        label: "Id of user who last updated the document",
        type: String,
        autoValue: function() {
            return this.userId;
        }
    },
    updatedAt: {
        // Force value to be current date (on server) upon insert, upsert, or update.
        label: "Last Updated",
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Redux.attachSchema(Redux.schema);


Redux.helpers({
   steps: function() {
       // All steps for the current Redux
       Steps.find({},{sort: {updatedAt: -1}})
   }
});