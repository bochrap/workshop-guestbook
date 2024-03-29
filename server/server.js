import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

app.get("/", async (request, response) => {
  const result = await db.query("SELECT * FROM message_board ");
  response.json(result.rows);
});

app.post("/", async (request, response) => {
  const username = request.body.username;
  const post = request.body.post;

  const newPost = await db.query("INSERT INTO message_board (username, post) VALUES ($1, $2) RETURNING *", [username, post]);
  response.json(newPost.rows[0]);
});

app.delete("/:id", async (request, response) => {
  const recordId = request.params.id;
  const result = await db.query("DELETE FROM message_board WHERE id = $1", [recordId]);
  response.json(result.rows[0]);
});

app.listen(8080, function () {
  console.log("Server listening at http://localhost:8080");
});
