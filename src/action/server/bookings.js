'use server'

import { authOptions } from "@/lib/authOptions"
import { collections, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"

const bookingCollection = dbConnect(collections.BOOKINGS)

export const postBooking = async (payload) => {
    const {user} = await getServerSession(authOptions) || {}
    if(!user) {
        return {success: false}
    }

    console.log(payload);
    

    const newBooking = {
        
    }

    // const query = {email: user.email}

    // const result = 
}