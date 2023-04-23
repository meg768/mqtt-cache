# mqtt-cache
Modifies the MQTT library not to send the same message twice in a row.

Create an MQTT instance as normal. Then just call MqttCache() on the instance.

```javascript
const Mqtt = require('mqtt');
const MqttCache = require('mqtt-cache');

let mqtt = MqttCache(Mqtt.connect(...));

```
