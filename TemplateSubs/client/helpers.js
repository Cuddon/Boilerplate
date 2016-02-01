/**
 * Created by andrew on 4/01/2016.
 */

Template.TemplateSubs.helpers({
    latestCount: function () {
        // template level subscription sets a template function
        return CounterCollection.find({}, {
            limit: 1,
            sort: {
                // Newest first to get the latest record
                updatedAt: -1
            }
        }).fetch()[0].count;
},

    history: function () {
        //return Template.instance().history();

        // All records (latest on top)
        return CounterCollection.find({}, {
            sort: {
                updatedAt: -1
            }
        });
    }

});
