import { db } from "@/prisma/db";
import { MedicationResponse } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
    const data = await request.json()
    const {name,price,image,description,stock,requiresPrescription,
categoryId,} = data
    const newMedication = await db.medication.create({
        data:{
            name:name,
            price:price,
            image:image,
            description:description,
            stock:stock,
            requiresPrescription:requiresPrescription,
            categoryId:categoryId,
        }
    })
    return NextResponse.json({
        data:newMedication,
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

export async function GET(): Promise <NextResponse<MedicationResponse>> {
    try {
        const data = await db.medication.findMany();
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