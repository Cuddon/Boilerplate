/**
 * Created by andrew on 27/01/2016.
 */


Meteor.publish('models', function () {
    // All models owned by this user (or shared to)
    //TODO: check ownership or shared to permission in Models Publication

    return Models.find({
        createdBy: this.userId
    });

});

