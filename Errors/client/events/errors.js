/**
 * Created by Andrew on 8/06/2015.
 */

Template.Errors.events({

    "click .error-item": function () {
        // An error chip was clicked, so remove it from the list and close the chip

        Errors.clearOne(this._id);

        // Prevent the default so the chip can be hidden rather than removed
        return false;
    }

});
