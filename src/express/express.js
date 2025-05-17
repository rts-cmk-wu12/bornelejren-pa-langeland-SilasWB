import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import ViteExpress from 'vite-express';
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const client = new MongoClient(CONNECTION_STRING);

const server = express();
server.use(express.json());

let sponsors;

async function connectDB() {
  try {
    await client.connect();
    const database = client.db('blog');
    sponsors = database.collection('sponsors');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

server.get("/api/sponsors", async (_, res) => {
  const data = await sponsors.find().toArray();
  res.json(data);
});

server.post("/api/sponsors", async (req, res) => {
  try {
    const result = await sponsors.insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Fejl ved oprettelse af sponsor" });
  }
});

server.delete("/api/sponsors/:id", async (req, res) => {
  try {
    const result = await sponsors.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Sponsor slettet" });
    } else {
      res.status(404).json({ message: "Sponsor ikke fundet" });
    }
  } catch (error) {
    res.status(500).json({ message: "Fejl ved sletning" });
  }
});

await connectDB();
ViteExpress.listen(server, 3000, () => console.log("🚀 Server running at http://localhost:3000"));
