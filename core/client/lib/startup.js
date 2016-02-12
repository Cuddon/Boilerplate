/**
 * Created by andrew on 25/01/2016.
 */

Meteor.startup(function() {

    // Name of the app
    var appName = 'ReduxOne';

    Session.setDefault("appName", appName);
    document.title = appName;

    // Materialize
    AutoForm.setDefaultTemplate('materialize');
});

