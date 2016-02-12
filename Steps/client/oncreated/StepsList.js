/**
 * Created by andrew on 26/01/2016.
 */

Template.StepsList.onCreated(function () {
    // Here, this equals the current template instance. We can assign
    // our ReactiveVar to it, making it accessible throughout the
    // current template instance.

    // Current template instance )to use inside autorun callbacks etc where 'this' has a different scope)
    var instance = this;

    // The following will re-run when the reactive variables/cursors change
    instance.autorun(function () {

        // ID parameter from the route
        var modelId = FlowRouter.getParam('id');

        // Template level subscription (which is ended when the template is destroyed)
        var subscription = instance.subscribe('steps', modelId);

        // Check if subscription is ready
        if (subscription.ready()) {
            console.log(`Steps subscription ready for model ${modelId}`);
        } else {
            console.log(`> Steps subscription for model ${modelId} is not ready yet.`);
        }

    });

});
