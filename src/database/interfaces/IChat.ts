import { Document } from "mongoose"

export interface IChat extends Document{
    _id: string,
    user_id: string,
    name_chat: string,
}