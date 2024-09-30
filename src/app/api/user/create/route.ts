import { User } from '@/database/functions/manageUser';
import { NextResponse } from 'next/server';
import { config } from 'dotenv';

config();

export const POST = async (req: Request) => {
    const { username, email, password, npassword } = await req.json();

    const user = new User();
    const response = await user.create(username, email, password);

    console.log(response)

    return NextResponse.json(response);
}