import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Server is running on port ${port}`);
});

import routes from "./routes/index.js";
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
