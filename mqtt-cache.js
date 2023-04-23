module.exports = function MqttCache(client) {

    let publish = client.publish;
    let cache = {};

    client.publish = (topic, message, ...args) => {

        if (cache[topic] == undefined || cache[topic] != message) {
            cache[topic] = message;
            return publish.call(client, topic, message, ...args);

        }

    }

    return client;
}