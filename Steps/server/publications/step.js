/**
 * Created by andrew on 27/01/2016.
 */



Meteor.publish('step', function (id) {
    // Single step nominated _id and must be owned by this user (or shared to)

    //TODO: check ownership or shared to permission in Step Publication

    return Steps.find({
        _id: id,
        modelId: this.modelId,
        $or: [{createdBy: this.userId}, {ownerId: this.userId}]
    });

});
