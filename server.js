import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

console.log("hello");
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
