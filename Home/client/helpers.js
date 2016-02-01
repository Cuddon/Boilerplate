Session.setDefault('counter', 0);

Template.Home.helpers({
    counter: function () {
        return Session.get('counter');
    }
});

