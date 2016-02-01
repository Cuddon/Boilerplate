/**
 * Created by andrew on 27/01/2016.
 */

Meteor.methods({

    incrementCounter: function () {

        var latest;

        if (CounterCollection.find().count() == 0) {
            // No records so latest is zero
            latest = 0;
        } else {
            latest = CounterCollection.find({}, {
                limit: 1,
                sort: {
                    // Newest first
                    updatedAt: -1
                }
            }).fetch()[0].count;
        }

        CounterCollection.insert({
            count: latest + 1,
            updatedAt: new Date()
        })

    },

    resetCounter: function () {
        // Remove all existing records
        CounterCollection.remove({});

        // Create a new Counter record
        CounterCollection.insert({
            count: 0,
            updatedAt: new Date()
        })

    }



});

