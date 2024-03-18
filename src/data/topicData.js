import { useBetween } from "use-between"

const sslString = "-X ssl.certificate.location=<changeMe> -X ssl.key.location=<changeMe> -X security.protocol=ssl -X ssl.ca.location=<changeMe>"

const producerOrConsumer = "P/C"

const broker = "kafka.app.dev.enterprise.com:9093"

const topic = "my-awesome-topic"

const baseString = `kcat -${producerOrConsumer} ${sslString} -b ${broker} -t ${topic}`

const topicData = [
    {
        "name": "1P",
        "producers": [
            {
                "topicName": "my-awesome-topic",
                "localServer": "localhost:8080",
                "stageServer": "awsomeStageServer:9092",
                "prodServer": "awesomeProdServer:9093"
            },
            {
                "topicName": "my-luxurious-topic",
                "localServer": "localhost:8080",
                "stageServer": "luxuriousStageServer:9092",
                "prodServer": "luxuriousProdServer:9093"
            }
        ],
        "consumers": [
            {
                "topicName": "my-terrific-topic",
                "localServer": "localhost:8080",
                "stageServer": "terrificStageServer:9092",
                "prodServer": "terrificProdServer:9093"
            },
            {
                "topicName": "my-foolish-topic",
                "localServer": "localhost:8080",
                "stageServer": "foolishStageServer:9092",
                "prodServer": "foolishProdServer:9093"
            }
        ]
    },
    {

        "name": "8Q",
        "producers": [
            {
                "topicName": "my-great-topic",
                "localServer": "localhost:8080",
                "stageServer": "greatStageServer:9092",
                "prodServer": "greatProdServer:9093"
            },
            {
                "topicName": "my-hopeless-topic",
                "localServer": "localhost:8080",
                "stageServer": "hopelessStageServer:9092",
                "prodServer": "hopelessProdServer:9093"
            }
        ],
        "consumers": [
            {
                "topicName": "my-fabulous-topic",
                "localServer": "localhost:8080",
                "stageServer": "fabulousStageServer:9092",
                "prodServer": "fabulousProdServer:9093"
            },
            {
                "topicName": "my-sultry-topic",
                "localServer": "localhost:8080",
                "stageServer": "sultryStageServer:9092",
                "prodServer": "sultryProdServer:9093"
            }
        ]
    },
    {
        "name": "5Z",
        "producers": [
            {
                "topicName": "my-magnificent-topic",
                "localServer": "localhost:8080",
                "stageServer": "magnificentStageServer:9092",
                "prodServer": "magnificentProdServer:9093"
            },
            {
                "topicName": "my-curious-topic",
                "localServer": "localhost:8080",
                "stageServer": "curiousStageServer:9092",
                "prodServer": "curiousProdServer:9093"
            }
        ],
        "consumers": [
            {
                "topicName": "my-horrific-topic",
                "localServer": "localhost:8080",
                "stageServer": "horrificStageServer:9092",
                "prodServer": "horrificProdServer:9093"
            },
            {
                "topicName": "my-extravagant-topic",
                "localServer": "localhost:8080",
                "stageServer": "extravagantStageServer:9092",
                "prodServer": "extravagantProdServer:9093"
            }
        ]
    },
  
]


export { topicData, sslString }

