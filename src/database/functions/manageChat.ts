import { ChatModel } from "../models/chats";


export class Chat{
    private id: string | undefined;

    constructor(id?: string){
        this.id = id;
    }

    public async get(){
        const chat_data = await ChatModel.findById(this.id);
        
        return chat_data;
    }

    public async create(name: string, user_id: string){
        const chat_data = await ChatModel.create({name_chat: name, user_id: user_id});

        return chat_data;
    }
    
    public async delete(){
        const chat_data = await ChatModel.deleteOne({_id: this.id});

        return chat_data;
    }
}