/**
 * Created by andrew on 26/01/2016.
 */

Template.StepAdd.onCreated(function () {

    // Current template instance )to use inside autorun callbacks etc where 'this' has a different scope)
    var instance = this;

    // ReactiveVar to store modelId so Autoform can access it to save with the new step
    instance.modelId = new ReactiveVar('');

    // The following will re-run when the reactive variables/cursors change
    instance.autorun(function () {

        // ID parameter from the route
        var modelId = FlowRouter.getParam('modelId');
        instance.modelId.set(modelId);

        // Template level subscription (which is ended when the template is destroyed)
        var subscription = instance.subscribe('model', modelId);

        // Check if subscription is ready
        if (subscription.ready()) {
            console.log(`Model for ${modelId} subscription ready.`);
        } else {
            console.log(`> Model for ${modelId} subscription is not ready yet.`);
        }
    });

});
