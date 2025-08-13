// lib/db.ts
import { MongoClient, Db } from "mongodb";

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:admin@layouts.jigem.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Layouts";

const client = new MongoClient(uri);

export async function getDb(): Promise<Db> {
  await client.connect();

  return client.db("sample_mflix");
}
