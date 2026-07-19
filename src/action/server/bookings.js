'use server'

import { authOptions } from "@/lib/authOptions"
import { collections, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"

const bookingCollection = dbConnect(collections.BOOKINGS)

export const postBooking = async (payload) => {
    const {serviceTitle, fromDate, toDate, totalHour, totalCost, status, division, district, address, email} = payload
    const {user} = await getServerSession(authOptions) || {}
    if(!user) {
        return {success: false}
    }

    const newBooking = {
        serviceTitle: serviceTitle,
        fromDate: fromDate,
        toDate: toDate,
        totalHour: totalHour,
        totalCost: totalCost,
        status: status,
        division: division,
        district, district,
        address: address,
        email: email
    }

    const result = await bookingCollection.insertOne(newBooking)
    return {success: result.acknowledged}
}

export const getUserBookings = async () => {
    const {user} = await getServerSession(authOptions) || {}
    if(!user) {
        return {success: false}
    }
    
    const query = {email: user.email}

    const result = await bookingCollection.find(query).toArray()

    return result
}