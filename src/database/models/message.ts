import { Schema, model, models } from "mongoose";
import { IMessage } from "../interfaces/IMessage";

const MessageSchema: Schema = new Schema({
        _id: { type: String, unique: true, required: true },
        chat_id: { type: String, required: true },
        message: { type: { role: String, content: String}, required: true },
    });


export const MessageModel = models.Message || model<IMessage>('Message', MessageSchema);