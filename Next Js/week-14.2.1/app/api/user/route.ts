import { NextRequest, NextResponse } from 'next/server';
import client from '@/db'


export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();
        const user = await client.user.create({
            data: {
                username,
                password, // Remember to hash passwords before storing in real applications
            },
        });
        console.log("User created:", user);
        return NextResponse.json({ message: "User created", username: user?.username,password:user?.password });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const users = await client.user.findMany({});
        if (!users) {
            return NextResponse.json({ error: "No user found" }, { status: 404 });
        }
        return NextResponse.json(users.map(user=>({ name: user?.username, password:user?.password })));
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
    }
}
