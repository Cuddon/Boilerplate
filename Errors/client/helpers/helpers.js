/**
 * Created by andrew on 26/01/2016.
 */

Template.Errors.helpers({
    errors: function () {
        return Errors.getList();
    },

    moreThanOne: function(){
        // Current item has a count > 1
        return this.count > 1;
    }

});
