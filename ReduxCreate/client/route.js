/**
 * Created by andrew on 26/01/2016.
 */


FlowRouter.route('/redux/create', {
    name : 'ReduxCreate',

    // Functions to run before the route is loaded. List of functions
    triggersEnter: [ function() {
        console.log( "Something to do on ENTER." );
    }],

    action: function(params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "ReduxCreate"});
    },

    // Functions to run before another route is loaded. List of functions
    triggersExit: [ function() {
        console.log( "Something to do on EXIT." );
    }]


});