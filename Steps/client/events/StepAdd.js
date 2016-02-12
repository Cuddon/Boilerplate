/**
 * Created by andrew on 2/02/2016.
 */


AutoForm.hooks({

    stepAddForm: {

        before: {
            // Before submission to the server method but after the form has been validated
            method: function (doc) {
                console.log('Setting modelId');
                // Really ugly way of accessing the reactiveVar that holds the modelId in the parent template
                //doc.modelId = this.template.view.parentView.parentView._templateInstance.modelId.get();
                doc.modelId = FlowRouter.getParam('modelId');
                return doc;
            }
        },

        onSuccess: function () {
            // Called when onSubmit succeeds
            // Called by this.done() without an error message
            let modelId = FlowRouter.getParam('modelId');
            FlowRouter.go('modelView', {id: modelId});
        },

        onError: function (formType, error) {
            // Called when onSubmit fails
            // Error is raised by the server method
            // e.g. throw new Meteor.Error('database-error', "Unable to add a step. Please contact your administrator.");

            if (error.error == 'validation-error' && typeof error.reason === 'string') {
                // Single AutoForm validation error
                let reason = error.reason;
                let field = error.details[0].name;
                this.addStickyValidationError(this.formId, field, reason);
            } else {
                // Other server error
                if (error.error){
                    Errors.add(error.error, error.reason);
                } else {
                    // No error code (just an autoForm pre-submit validation error) so ignore
                }
            }
        }

    }
});

