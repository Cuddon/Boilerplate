/**
 * Created by andrew on 26/01/2016.
 */

Template.ModelView.onCreated(function () {

    // Current template instance )to use inside autorun callbacks etc where 'this' has a different scope)
    var instance = this;

    // The following will re-run when the reactive variables/cursors change
    instance.autorun(function () {

        // ID parameter from the route
        var modelId = FlowRouter.getParam('id');

        // Template level subscription (which is ended when the template is destroyed)
        var subscription = instance.subscribe('model', modelId);

        // Check if subscription is ready
        if (subscription.ready()) {
            console.log(`Model ${modelId} subscription ready.`);
        } else {
            console.log(`> Model ${modelId} subscription is not ready yet.`);
        }

        // Initialize the Materialize plugin only when Blaze is done with DOM manipulation
        //Tracker.afterFlush(function() {
         //   this.$(".collapsible").collapsible({
        //        accordion: false
       //     });
       // });
    });

});
