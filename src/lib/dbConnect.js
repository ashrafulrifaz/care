import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGODB_URI
const dbName = process.env.DBNAME
export const collections = {
    USERS: 'users',
    BOOKINGS: 'bookings'
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = (cname) => {
    return client.db(dbName).collection(cname)
}