/**
 * Models Collection (MongoDB)
 */


Models = new Mongo.Collection("models");

Models.schema = new SimpleSchema({
    name: {
        label: "Name",
        type: String,
        max: 50
    },
    description: {
        label: "Description",
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
    category: {
        label: "Category",
        type: String,
        defaultValue: "Not categorised",
        max: 50,
        optional: true
    },
    notes: {
        label: "Notes",
        type: String,
        max: 1024,
        optional: true
    },

    ownerId: {
        label: "Id of user who currently owns the document (cane be changed by Admin only)",
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
        },
        optional: true
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
        },
        optional: true
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
        },
        optional: true
    },

    updatedBy: {
        label: "Id of user who last updated the document",
        type: String,
        autoValue: function () {
            return this.userId;
        },
        optional: true
    },

    updatedAt: {
        // Force value to be current date (on server) upon insert, upsert, or update.
        label: "Last Updated",
        type: Date,
        autoValue: function () {
            return new Date();
        },
        optional: true
    }
});

Models.attachSchema(Models.schema);


// Collection helpers
Models.helpers({

    steps: function (id) {
        // All steps for a model
        return Steps.find({}, {
            sort: {
                updatedAt: -1
            }
        })
    }
});