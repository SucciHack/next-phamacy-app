import { registerInputs } from "@/components/Forms/register-form";
import { db } from "@/prisma/db";
import { hash } from "bcrypt-ts"
import { NextRequest, NextResponse } from "next/server";

//creating the user 
export async function POST(request:NextRequest) {
    try {
        const data:registerInputs = await request.json()
    const {email, password,phoneNumber,fullname} = data
    const existingUser = await db.user.findUnique({
        where:{
            email
        }
    })
        if(existingUser){
            return NextResponse.json({
                data:null,
                error:"user already exists"
            },{
                status:409
            })
        }
        const hashedPassword = await hash(password,10)
        const newUser = await db.user.create({
            data:{
                fullname,
                email,
                password:hashedPassword,
                phoneNumber,
            }
        })
        return NextResponse.json({
            data:newUser,
            message:"created",
            error:null
        },{
            status:201
        })

    } catch (error) {
        console.log(error)
    }
    
}