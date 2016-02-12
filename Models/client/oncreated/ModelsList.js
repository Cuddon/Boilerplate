/**
 * Created by andrew on 26/01/2016.
 */

Template.ModelsList.onCreated(function () {
    // Here, this equals the current template instance. We can assign
    // our ReactiveVar to it, making it accessible throughout the
    // current template instance.

    // Current template instance )to use inside autorun callbacks etc where 'this' has a different scope)
    var instance = this;

    // The following will re-run when the reactive variables/cursors change
    instance.autorun(function () {

        // Template level subscription (which is ended when the template is destroyed)
        var subscription = instance.subscribe('models');

        // Check if subscription is ready
        if (subscription.ready()) {
            console.log("ModelsList subscription ready");
        } else {
            console.log("> ModelsList subscription is not ready yet. \n\n");
        }

        // Initialize the Materialize plugin only when Blaze is done with DOM manipulation
        //Tracker.afterFlush(function() {
         //   this.$(".collapsible").collapsible({
        //        accordion: false
       //     });
       // });
    });

});
