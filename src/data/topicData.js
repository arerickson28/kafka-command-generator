import { useBetween } from "use-between"

const sslString = "ssl.location=<CHANGEME>"

const topicData = [
    {
        "name": "1P",
        "producers": [
            {
                "topicName": "my-awesome-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            },
            {
                "topicName": "my-luxurious-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            }
        ],
        "consumers": [
            {
                "topicName": "my-terrific-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            },
            {
                "topicName": "my-foolish-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            }
        ]
    },
    {

        "name": "8Q",
        "producers": [
            {
                "topicName": "my-great-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            },
            {
                "topicName": "my-hopless-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            }
        ],
        "consumers": [
            {
                "topicName": "my-fabulous-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            },
            {
                "topicName": "my-sultry-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            }
        ]
    },
    {
        "name": "5Z",
        "producers": [
            {
                "topicName": "my-magnificent-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            },
            {
                "topicName": "my-curious-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            }
        ],
        "consumers": [
            {
                "topicName": "my-horrific-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            },
            {
                "topicName": "my-extravagant-topic",
                "localServer": "localhost:8080",
                "stageServer": "theStageServer:9092",
                "prodServer": "theProdServer:9093"
            }
        ]
    },
  
]


export { topicData, sslString }

