/**
 * Created by andrew on 27/01/2016.
 */



Meteor.publish('model', function (id) {
    // Single model nominated _id and must be owned by this user (or shared to)

    //TODO: check ownership or shared to permission in model Publication

    return Models.find({
        _id: id //,
        //createdBy: this.userId
    });

});
