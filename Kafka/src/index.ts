import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:'my-app',
    brokers:["localhost:9092"]
})

const producer = kafka.producer();
const consumer = kafka.consumer({groupId:"my-app3"});

async function main () {
    await producer.connect();
    await producer.send({
        topic:"quickstart-events",
        messages :[{
            value:"Hi there"
        }]
    });

    await consumer.connect();
    await consumer.subscribe({
        topic:"quickstart-events",fromBeginning:true
    })

    await consumer.run({
        eachMessage:async ({topic,partition,message})=>{
            if(!message.value){
                return;
            }
            console.log({
                partition,
                offset:message.offset,
                vlaue:message?.value?.toString(),
            })
        },
    })
}

main();

