import { Document } from "mongoose"

export interface IMessage extends Document{
    _id: string,
    chat_id: string,
    message: { role: string, content: string },
}