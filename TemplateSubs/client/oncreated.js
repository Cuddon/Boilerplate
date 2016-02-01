/**
 * Created by andrew on 26/01/2016.
 */

Template.TemplateSubs.onCreated(function () {
    // Here, this equals the current template instance. We can assign
    // our ReactiveVar to it, making it accessible throughout the
    // current template instance.

    // Current template instance )to use inside autorun callbacks etc where 'this' has a different scope)
    var instance = this;


    /*
    *   Count subscription
    * */

    // The following will re-run when the reactive variables/cursors change
    instance.autorun(function () {

        // Ad in any other reactiveVars here to trigger a re-run of this function when they change
        var id = FlowRouter.getParam('id');

        // Template level subscription (which is ended when the template is destroyed)
        var subscription = instance.subscribe('counter', id);

        // Check if subscription is ready
        if (subscription.ready()) {
            console.log("Count subscription ready\n\n");
        } else {
            console.log("> Count subscription is not ready yet. \n\n");
        }
    });

});