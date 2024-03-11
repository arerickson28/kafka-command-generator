import { useBetween } from "use-between"

const sslString = "ssl.location=<CHANGEME>"

const producerTopicData = [
    {
        "topicName": "my-awesome-topic",
        "localServer": "localhost:8080",
        "stageServer": "theStageServer:9092",
        "prodServer": "theProdServer:9093"
    },
    {
        "topicName": "my-great-topic",
        "localServer": "localhost:8080",
        "stageServer": "theStageServer:9092",
        "prodServer": "theProdServer:9093"
    }
]


const consumerTopicData = [
    {
        "topicName": "my-terrific-topic",
        "localServer": "localhost:8080",
        "stageServer": "theStageServer:9092",
        "prodServer": "theProdServer:9093"
    },
    {
        "topicName": "my-fabulous-topic",
        "localServer": "localhost:8080",
        "stageServer": "theStageServer:9092",
        "prodServer": "theProdServer:9093"
    }
]

export { producerTopicData, consumerTopicData, sslString }

