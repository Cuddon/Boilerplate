/**
 * Created by Andrew on 8/06/2015.
 */

Template.ModelsList.events({

    "click .model-create-button": function () {
        // Create model button is clicked

        FlowRouter.go('modelCreate');

        // Prevent default form submit
        return false;
    },

    "click .model-card": function () {
        // A model card item is clicked

        var modelId = this._id;

        // Open the selected model
        FlowRouter.go('modelView', {id: modelId});

        // Prevent default form submit
        return false;
    }

});
