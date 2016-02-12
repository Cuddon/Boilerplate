/**
 * Created by andrew on 26/01/2016.
 */


var modelRoutes = FlowRouter.group({
    prefix: "/model"
});


modelRoutes.route('/list', {
    name: 'modelsList',

    action: function () {
        BlazeLayout.render("MainLayout", {content: "ModelsList"});
    }
});

modelRoutes.route('/create', {
    name: 'modelCreate',

    action: function () {
        BlazeLayout.render("MainLayout", {content: "ModelCreate"});
    }
});


modelRoutes.route('/view/:id', {
    name: 'modelView',

    action: function () {
        BlazeLayout.render("MainLayout", {content: "ModelView"});
    }
});

modelRoutes.route('/update/:id', {
    name: 'modelUpdate',

    action: function () {
        BlazeLayout.render("MainLayout", {content: "ModelUpdate"});
    }
});


modelRoutes.route('/settings/:id', {
    name: 'modelSettings',

    action: function () {
        BlazeLayout.render("MainLayout", {content: "ModelSettings"});
    }
});


modelRoutes.route('/run/:id', {
    name: 'modelRun',

    action: function () {
        BlazeLayout.render("MainLayout", {content: "ModelRun"});
    }
});


modelRoutes.route('/delete/:id', {
    name: 'modelDelete',

    action: function () {
        BlazeLayout.render("MainLayout", {content: "ModelDelete"});
    }

});
