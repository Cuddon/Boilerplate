/**
 * Name of the application.
 */

Template.registerHelper('appName', function() {
    return Session.get('appName');
});