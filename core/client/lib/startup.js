/**
 * Created by andrew on 25/01/2016.
 */

Meteor.startup(function() {

    // Nme of the app
    var appName = 'Boilerplate App';

    Session.setDefault("appName", appName);
    document.title = appName;

});

