import { getDb } from "../../../config/db";


export async function GET(request: Request) {
  const db = await getDb();
  const movies = await db.collection("movies").find({}).limit(10).toArray();

  return new Response(JSON.stringify(movies), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const db = await getDb();
  const result = await db.collection("movies").insertOne(body);

  return new Response(JSON.stringify(result), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
