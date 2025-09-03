import { Worker } from "bullmq";

const worker = new Worker(
    "file-upload-queue",
    async (job) => {
        console.log(`Job:${job.data}`)
        const data = JSON.parse(job.data)
        /*
        Path: data.path
        read pdf from path
        chuck the pdf
        call the openai embedding model for every chunk
        store the chuck in quadrant db
        */
    },
    { concurrency: 100, connection:{
        host:"localhost",
        port:6379
    } }
)

