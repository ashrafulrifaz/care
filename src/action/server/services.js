'use server'

import { collections, dbConnect } from "@/lib/dbConnect"

const serviceCollection = dbConnect(collections.SERVICES)

export const getAllServices = async () => {
    const services = await serviceCollection.find().toArray()
    return services || []
}