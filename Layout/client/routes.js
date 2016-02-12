/**
 * Created by andrew on 26/01/2016.
 */

FlowRouter.notFound = {

    action: function() {
        BlazeLayout.render("PublicLayout", {content: "NotFound", path: FlowRouter.current().path});
    }

};