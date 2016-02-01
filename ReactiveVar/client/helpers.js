/**
 * Created by andrew on 26/01/2016.
 */

Template.ReactiveVar.helpers({
    counter: function() {
        // Here we get our template instance from Template.instance() and
        // can access showExtraFields from it.
         return Template.instance().counter.get();
    }
});
