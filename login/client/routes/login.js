/**
 * Created by andrew on 5/02/2016.
 */

FlowRouter.route('/login', {
    name: 'login',

    action: function () {
        BlazeLayout.render("MainLayout", {content: "Login"});
    }
});
