import { NextRequest, NextResponse } from "next/server";
import { getClientPromise } from "@/lib/mongodb";

const DB_NAME = "linknamu";
const COLLECTION = "clicks";

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ linkId, count: null });
  }

  const client = await getClientPromise();
  const collection = client.db(DB_NAME).collection(COLLECTION);

  const result = await collection.findOneAndUpdate(
    { linkId },
    { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ linkId, count: result?.count ?? 1 });
}

export async function GET() {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({});
  }

  const client = await getClientPromise();
  const collection = client.db(DB_NAME).collection(COLLECTION);

  const docs = await collection.find({}).toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));

  return NextResponse.json(counts);
}
