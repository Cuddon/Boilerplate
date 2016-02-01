/**
 * Created by andrew on 26/01/2016.
 */

FlowRouter.notFound = {

    action: function(params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "NotFound", path: FlowRouter.current().path});
    }

};