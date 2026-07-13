'use server'

import { collections, dbConnect } from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    const {name, phone, nid, email, password} = payload

    const isExist = await dbConnect(collections.USERS).findOne({email})

    if(isExist) {
        return {error: 'user already exist'}
    }

    const newUser = {
        name: name,
        phone: phone,
        nid: nid,
        email: email,
        password: password
    }

    const result = await dbConnect(collections.USERS).insertOne(newUser)
    if(result.acknowledged) {
        return {
            ...result,
            insertedId: result.insertedId.toString()
        }
    }
}