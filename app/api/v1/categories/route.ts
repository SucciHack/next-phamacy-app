import { db } from "@/prisma/db";
import { QueriesResponse } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const data = await request.json()
    const {name} = data
    const existingCategory = await db.category.findUnique({
        where:{
            name
        }
    })
    if(existingCategory){
        return NextResponse.json({
            data:null,
            message:"category already exists"
        },{
            status:409
        })
    }
    const newCategory = await db.category.create({
        data,
    })
    return NextResponse.json({
        data:newCategory,
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

export async function GET(): Promise <NextResponse<QueriesResponse>> {
    try {
        const data = await db.category.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include:{
                medications:true
            }
        });
        return NextResponse.json({
            data,
            message: "fetched successfully",
            error: null
        }, {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            data: null,
            message: "failed to fetch categories",
            error: (error as Error).message
        }, {
            status: 500
        });
    }
}