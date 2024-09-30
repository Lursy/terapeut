import { User } from '@/database/functions/manageUser';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
    const { id, email } = await req.json();

    const user = new User(id);
    const response = await user.get(id?undefined:email);

    console.log(response);

    return NextResponse.json(response);
}