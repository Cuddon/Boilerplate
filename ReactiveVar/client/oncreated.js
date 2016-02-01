/**
 * Created by andrew on 26/01/2016.
 */

Template.ReactiveVar.onCreated(function(){
    // Here, this equals the current template instance. We can assign
    // our ReactiveVar to it, making it accessible throughout the
    // current template instance.

    // counter is the number of button clicks
    this.counter = new ReactiveVar(0);

    //this.counter.set(0);
});