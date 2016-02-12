/**
 * Created by andrew on 4/01/2016.
 */

Template.ModelView.helpers({
    model: function () {
        // All models (owner by this user)

        var id = FlowRouter.getParam('id');

        return Models.findOne({
            _id: id
        });
    },

    fieldsToInclude: function () {
        return ['name', 'description', 'version', 'category', 'notes'];
    }


});
