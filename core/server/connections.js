/**
 * Register and de-register client connections
 * Used to change server behaviour if no clients connected (e.g reduce polling interval for external rest end point)
 */

// Global
registeredConnections = [];

Meteor.onConnection(function (connection) {
    //console.log(connection);

    if (registeredConnections.indexOf(connection.id) === -1) {
        // New connection not yet registered
        registeredConnections.push(connection.id);
        console.log('New connection %s from %s', connection.id, connection.clientAddress);
    }

    connection.onClose(function () {
        registeredConnections.splice(connection.id, 1);
        console.log('Connection %s from %s closed', connection.id, connection.clientAddress);
    });
});

