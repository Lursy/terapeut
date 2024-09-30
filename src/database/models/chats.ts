import { Schema, model, models } from "mongoose";
import { IChat } from "../interfaces/IChat";

const ChatSchema: Schema = new Schema({
        _id: { type: String, unique: true, required: true },
        user_id: { type: String, required: true },
        name: { type: String, required: true },
    });


export const ChatModel = models.Chat || model<IChat>('Chat', ChatSchema);

