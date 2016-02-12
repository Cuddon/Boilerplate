/**
 * Steps Collection (MongoDB)
 */


Steps = new Mongo.Collection("steps");

Steps.schema = new SimpleSchema({
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
    notes: {
        label: "Notes",
        type: String,
        max: 1024,
        optional: true
    },
    group: {
        label: "Step group/phase",
        type: String,
        defaultValue: "Un-grouped"
    },
    order: {
        label: "Order (within a step group)",
        type: Number,
        defaultValue: 0
    },
    stencil: {
        label: "Step stencil",
        type: String
    },

    modelId: {
        type: String,
        label: "Model Id",
        optional: true
    },

    ownerId: {
        label: "Id of user who currently owns the document (cane be changed by Admin only)",
        type: String,
        autoValue: function () {
            // Force value to be current user upon insert and prevent updates thereafter.
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
            // Force value to be current user upon insert and prevent updates thereafter.
            if (this.isInsert) {
                return this.userId;
            } else if (this.isUpsert) {
                return {$setOnInsert: this.userId};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        },
        denyUpdate: true,
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
        denyUpdate: true,
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

Steps.attachSchema(Steps.schema);

