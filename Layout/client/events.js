/**
 * Created by andrew on 26/01/2016.
 */


Template.Header.events({
    'click .home-button': function () {
        FlowRouter.go('Home');
    }
});


Template.SideBar.events({
    'click .home-button': function () {
        FlowRouter.go('Home');
    }
});
