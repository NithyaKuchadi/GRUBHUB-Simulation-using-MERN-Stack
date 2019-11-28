var kafka = require('kafka-node');

function ConnectionProvider() {
    this.getConsumer = function(topic_name) {
        //if (!this.kafkaConsumerConnection) {
            this.client = new kafka.KafkaClient("ec2-3-19-232-5.us-east-2.compute.amazonaws.com:2181");
            this.kafkaConsumerConnection = new kafka.Consumer(this.client,[ { topic: topic_name, partition: 0}]);
            this.client.on('ready', function () { console.log('Topic Consumer is ready for topic:', topic_name) })
        //}
        return this.kafkaConsumerConnection;
    };

    //Code will be executed when we start Producer
    this.getProducer = function() {

        if (!this.kafkaProducerConnection) {
            this.client = new kafka.KafkaClient("ec2-3-19-232-5.us-east-2.compute.amazonaws.com:2181");
            var HighLevelProducer = kafka.HighLevelProducer;
            this.kafkaProducerConnection = new HighLevelProducer(this.client);
            console.log('Response Producer is ready!');
        }
        return this.kafkaProducerConnection;
    };
}
exports = module.exports = new ConnectionProvider;
