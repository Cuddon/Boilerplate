/**
 * Created by andrew on 27/01/2016.
 */

Meteor.startup(function() {

    // When server starts reset the counter
    Meteor.call('resetCounter');

});
