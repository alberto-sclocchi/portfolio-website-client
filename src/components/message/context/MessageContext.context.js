import { createContext, useState } from "react";
import MessageService from "../service/MessageService";


const MessageContext =  createContext({});
const service = new MessageService();

export const MessageProvider = ({children}) => {

    const [ result, setResult ] = useState(null);



    const sendMessage = async (message) => {
        const messageAPI = await service.createMessage(message);

        if (messageAPI.message){
            setResult(messageAPI.message)
        }
        else {
            setResult("Thank you for the message. I will soon get back to you.")
        }

        setTimeout(() => {
            setResult(null)
        }, 5000)
    }




    return(
        <MessageContext.Provider value={({result, sendMessage})}>
            {children}
        </MessageContext.Provider>
    )
}


export default MessageContext;