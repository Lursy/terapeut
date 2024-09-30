import { IUser } from "../interfaces/IUser";
import { UserModel } from "../models/user";


export class User{
    private id: string | undefined;

    constructor(id?: string){
        this.id = id;
    }

    public async get(email?: string){
        let user_data: IUser | null;
        if(email){
            user_data = await UserModel.findOne({email: email});

            return user_data;
        }

        user_data = await UserModel.findById(this.id);
        
        return user_data;
    }

    public async create(username: string, email: string, password:string){
        const user_data = await UserModel.create({username: username, email: email, password: password});

        return user_data;
    }
}