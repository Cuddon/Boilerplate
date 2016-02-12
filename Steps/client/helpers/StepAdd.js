/**
 * Created by andrew on 4/01/2016.
 */

Template.StepAdd.helpers({
    model: function () {
        // All models (owner by this user)

        var modelId = FlowRouter.getParam('modelId');

        return Models.findOne({
            _id: modelId
        });
    }
});
