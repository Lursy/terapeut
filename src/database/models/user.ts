import { Schema, model, models } from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Verifica se o modelo 'User' já existe para evitar o erro de sobreescrever
export const UserModel = models.User || model<IUser>('User', UserSchema);
