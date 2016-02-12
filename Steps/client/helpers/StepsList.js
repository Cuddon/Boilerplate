/**
 * Created by andrew on 4/01/2016.
 */

Template.StepsList.helpers({

    steps: function () {
        // All steps (for this model and owner by this user)

        var modelId = FlowRouter.getParam('id');

        return Steps.find({
            modelId: modelId,
            $or: [
                {createdBy: Meteor.userId()},
                {ownedBy: Meteor.userId()}
            ]
        }, {
            // Sort byt order and then last updated
            sort: {
                order: 1,
                updatedAt: 1
            }
        });
    },

    groups: function () {
        // Array of step group names used in the current model

        var modelId = FlowRouter.getParam('id');

        var steps = Steps.find({
            modelId: modelId,
            $or: [
                {createdBy: Meteor.userId()},
                {ownedBy: Meteor.userId()}
            ]
        }, {fields: {group: 1}}).fetch();
        var groups = _.pluck(steps, 'group');
        return _.uniq(groups, function (x) {
            return x;
        });
    },

    stepsInGroup: function (group) {
        // Return the steps within a nominated step group
        var modelId = FlowRouter.getParam('id');

        return Steps.find({
                group: group,
                modelId: modelId,
                createdBy: Meteor.userId()
            }, {
                sort: {
                    order: 1,
                    updatedAt: 1
                }
            });
    }
});
