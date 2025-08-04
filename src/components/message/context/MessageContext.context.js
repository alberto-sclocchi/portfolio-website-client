import { createContext, useState } from "react";
import MessageService from "../service/MessageService";


const MessageContext =  createContext({});
const service = new MessageService();

export const MessageProvider = ({children}) => {

    const [ result, setResult ] = useState(null);
    const [ loading, setLoading ] = useState(false);



    const sendMessage = async (message) => {
        setLoading(true);
        
        try{
            const response = await service.createMessage(message);

            if (!response.success){
                console.log({messageCreated: response})
                setResult(response.message)
            }
            else {
                console.log({messageCreated: response})
                setResult(response.message);
            }

            setTimeout(() => {
                setResult(null)
            }, 5000)
        } catch (error) {
            console.error("Error sending message:", error);
            setResult("An error occurred while sending your message. Please try again later.");
        } finally {
            setLoading(false);
        }
    }




    return(
        <MessageContext.Provider value={({result, sendMessage, loading})}>
            {children}
        </MessageContext.Provider>
    )
}


export default MessageContext;