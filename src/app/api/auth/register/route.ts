
// extend next
import { NextRequest, NextResponse } from "next/server";
// database
import connectDB from "@/utils/connectDb";
// model
import User from "@/model/User";
// hashpassowrd
import { hashPassword } from "@/utils/auth";


export async function POST(request: NextRequest) {
    try {
        // connect to database
        await connectDB();
        // get user data from client example form
        const { email, password } = await request.json();

        // validation data this  case simple validation better use zod
        if (!email || !password) {
            return NextResponse.json(
                { message: "please enter invalid email and password" },
                { status: 422 }
            )
        };

        // check user data is in model
        const existingUser = await User.findOne({ email: email });
        // is true
        if (existingUser) {
            return NextResponse.json(
                { message: "user already exists!" },
                { status: 409 }
            )
        };

        // hashPassword
        const hashPassoword = await hashPassword(password);

        // create new user add to database
        const newUser = await User.create({
            email: email,
            password: hashPassoword
        });

        // log in terminal
        console.log(newUser);

        // return response to client
        return NextResponse.json(
            { message: "user create successfully" },
            { status: 201 }
        )

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error?.message },
                { status: 500 }
            )
        }

        return NextResponse.json({ error: "Unknown error" }, {
            status: 500
        })
    }
}