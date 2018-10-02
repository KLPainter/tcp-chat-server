const net = require('net');

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);
    
    client.on('end', () => {
        clients.remove(client);
    });

    client.on('data', data => {
        const message = `${client.username}: ${processMessage(data)}`;
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
    });