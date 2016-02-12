/**
 * Created by andrew on 26/01/2016.
 */


var stepRoutes = FlowRouter.group({
    prefix: "/model/:modelId/step"
});

stepRoutes.route('/list', {
    name : 'stepsList',

    action: function() {
        BlazeLayout.render("MainLayout", {content: "StepsList"});
    }
});

stepRoutes.route('/add', {
    name : 'stepAdd',

    action: function() {
        BlazeLayout.render("MainLayout", {content: "StepAdd"});
    }
});


stepRoutes.route('/view/:id', {
    name : 'stepView',

    action: function() {
        BlazeLayout.render("MainLayout", {content: "StepView"});
    }
});

stepRoutes.route('/update/:id', {
    name : 'stepUpdate',

    action: function() {
        BlazeLayout.render("MainLayout", {content: "StepUpdate"});
    }
});


stepRoutes.route('/settings/:id', {
    name : 'stepSettings',

    action: function() {
        BlazeLayout.render("MainLayout", {content: "StepSettings"});
    }
});


stepRoutes.route('/run/:id', {
    name : 'stepRun',

    action: function() {
        BlazeLayout.render("MainLayout", {content: "StepRun"});
    }
});


stepRoutes.route('/delete/:id', {
    name : 'stepDelete',

    action: function() {
        BlazeLayout.render("MainLayout", {content: "StepDelete"});
    }

});
