'use server'

import { collections, dbConnect } from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    const {name, phone, nid, email, password} = payload
    if(!email || !password) return null

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

export const loginUser = async (payload) => {
    const {email, password} = payload
    if(!email || !password) return null

    const user = await dbConnect(collections.USERS).findOne({email, password})
    if(user) {
        return user
    } else {
        return null
    }
}