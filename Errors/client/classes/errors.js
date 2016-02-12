/**
 * Created by andrew on 10/02/2016.
 */

// Global container
Errors = {

    list: [],   // Array of objects to hold the errors. {id: String, code: String, message: String, count: Number}

    ListDep: new Deps.Dependency,  // To track changes as a reactiveVar/Function

    getList: function () {
        // Return the list of errors (Array of objects)
        // [{_id: 'aj13ncjd13', code: 'validation-error', message: 'Field XYZ is invalid', count: 3},{}...]

        this.ListDep.depend();  // Makes this a reactive function
        return this.list;
    },

    add: function (code, msg) {
        // Add a new error to the list

        // First check if the error already exists in the list

        // Get an array of the messages (message text only, not code or id)
        let msgArray = _.pluck(this.getList(), 'message');       // => ['message 1 text', message 2 text'...]

        // Check if the message to add already exists in the array of messages
        let index = _.indexOf(msgArray, msg);
        if (index >= 0) {
            // Message already exists in the list so just increment the count against that message
            this.list[index].count += 1;
        } else {
            // Message does not exist so append it to the error list
            this.list.push({
                _id: Random.id(),
                code: code,
                message: msg,
                count: 1
            });
        }

        this.ListDep.changed();     // Lets autoRun know the reactive var has changed
        console.log(msg);
    },

    count: function () {
        // number of errors
        return this.list.length;
    },

    clearAll: function () {
        // Clear the error list
        this.list = [];
        this.ListDep.changed();     // Lets autoRun know the reactive var has changed
    },

    clearOne: function (id) {
        // remove a single item from the error list

        // Get an array of the ids
        let idArray = _.pluck(this.getList(), '_id');

        // Find this id in the array of _ids
        let index = _.indexOf(idArray, id);
        if (index >= 0) {
            // Exists so remove it
            this.list.splice(index, 1);
            this.ListDep.changed();     // Lets autoRun know the reactive var has changed
        }
    }

};




