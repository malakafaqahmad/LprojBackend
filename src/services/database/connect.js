// db/connect.js
import { MongoClient, ServerApiVersion } from 'mongodb';
import config from '../../config/config.js';


const client = new MongoClient(config.mongodbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

export async function connectToDB() {
  await client.connect();
  console.log("✅ MongoDB connected");
  db = client.db("linkedindb");
}

export function getDB() {
  return db;
}

