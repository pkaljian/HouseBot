import express from "express";
import bodyParser from "body-parser";
import { handleSms } from "./smsRouter";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send("Housebot is alive 🏠🤖");
});

app.post("/sms", handleSms);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Housebot listening on port ${PORT}`);
});
