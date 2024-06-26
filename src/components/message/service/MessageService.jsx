import axios from 'axios'

export default class MessageService {
    constructor(){
        let service = axios.create({
            // baseURL: `http://localhost:5005/message`,
            baseURL:'https://portfolio-website-api.fly.dev/message',
        })

        this.service = service;
    }

    createMessage(message){
        return this.service.post("/", message).then((resp) => {
            console.log({messageCreated: resp.data})
            return resp.data;
        })
    }
} 