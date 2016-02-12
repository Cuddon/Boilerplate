Session.setDefault('counter', 0);

Template.MainLayout.helpers({

    isSignedIn: function () {
        // True if the user is signed in
        return !!Meteor.user();
    },

    isSigningIn: function() {
        // True if the sign in process is still in train
        return Meteor.loggingIn();
    },

    isEmailVerified: function() {
        // True if at least one of the user's emails has been verified
        var user= Meteor.user();
        // Search for at least one verified email address
        var verified = _.some(user.emails, function(email){
            return email.verified;
        });
        return verified;
    }
});

