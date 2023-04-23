# mqtt-cache
Modifies the MQTT library not to send the same message twice in a row.
It may be useful when there is an MQTT supplier triggering values but
you only want to send changes to the MQTT broker.

Create an MQTT instance as normal. Then just call MqttCache() on the instance.

```javascript
const Mqtt = require('mqtt');
const MqttCache = require('mqtt-cache');

let mqtt = MqttCache(Mqtt.connect(...));

```

Complete source code.

```javascript

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
```
