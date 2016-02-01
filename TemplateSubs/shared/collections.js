/**
 * Created by andrew on 26/01/2016.
 */

CounterCollection = new Mongo.Collection("counter");

CounterCollection.schema = new SimpleSchema({
    count: {
        type: Number,
        label: "Click Count",
        defaultValue: 0,
        min: 0,
        max: 1000
    },
    updatedAt: {
        type: Date,
        label: "Last Updated"
    }
});

CounterCollection.attachSchema(CounterCollection.schema);
