/**
 * Created by andrew on 27/01/2016.
 */


Meteor.publish('steps', function (modelId) {
    // All steps for the nominated model
    // Must be owned by this user (or shared to)

    //TODO: check ownership or shared to permission in Steps Publication

    console.log(`Publishing Steps for model ${modelId}`);

    return Steps.find({
        modelId: modelId,
        $or: [
            {createdBy: this.userId},
            {ownedBy: this.userId}
        ]
    });
});

