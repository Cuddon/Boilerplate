/**
 * Created by andrew on 4/01/2016.
 */

Template.ModelsList.helpers({
    models: function () {
        // All models (owner by this user)
        return Models.find({}, {
            sort: {
                // Newest first to get the latest record
                updatedAt: -1
            }
        });
    },

    categories: function () {
        // Array of model categories
        var models = Models.find({}, {fields: {category: 1}}).fetch();
        var categories = _.pluck(models, 'category');
        var uniqueCategories = _.uniq(categories, function(x){
            return x;
        });
        return uniqueCategories;
    },

    recordsInCategory: function(category) {
        return Models.find({category: category});
    }
});
