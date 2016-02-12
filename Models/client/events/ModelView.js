/**
 * Created by Andrew on 8/06/2015.
 */

Template.ModelView.events({

    "click .step-add-button": function () {
        // Add a step for an existing model

        var modelId = FlowRouter.getParam('id');

        FlowRouter.go('stepAdd',  {modelId: modelId});

        // Prevent default form submit
        return false;
    }


});
