import { db } from "@/prisma/db"
import { NextRequest, NextResponse } from "next/server"


//creating orders
export async function POST(request:NextRequest){
    try {
    const data = await request.json()
    const newOrder = await db.order.create({
        data
    })
    return NextResponse.json({
        data:newOrder,
        message:"category created successfully",
        error:null
    },{
        status:201
    })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"failed to create category",
        },{
            status:500
        })
    }
}