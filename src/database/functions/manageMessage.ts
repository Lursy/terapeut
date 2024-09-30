import { MessageModel } from "../models/message";


export class Message{
    private id: string | undefined;

    constructor(id?: string){
        this.id = id;
    }

    public async get(){
        const message = await MessageModel.findById(this.id);
        
        return message;
    }

    public async create(chat_id: string, body: string){
        const message = await MessageModel.create({chat_id: chat_id, message: body});

        return message;
    }
    
    public async delete(chat_id: string){
        if(chat_id){
            const message = await MessageModel.deleteMany({chat_id: chat_id});
            
            return message;
        }
        
        const message = await MessageModel.findByIdAndDelete(this.id);

        return message;
    }
}