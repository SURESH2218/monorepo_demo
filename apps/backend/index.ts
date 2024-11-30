import express from "express";
import { BACKEND_URL } from "@repo/common/config";
const app = express();
console.log(BACKEND_URL);

app.get("/", (req, res) => {
  res.send("Hello from server....");
});

app.listen(4000, () => {
  console.log("server running");
});
