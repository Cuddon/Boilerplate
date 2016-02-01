/**
 * Created by andrew on 27/01/2016.
 */


Meteor.publish('counter', function (id) {

    //check(id, String);

    // All records (ignore id for this example)
    return CounterCollection.find({});
});

