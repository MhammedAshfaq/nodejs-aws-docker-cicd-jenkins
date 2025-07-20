import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World! CI/CD poda patti");
});

app.get("/test", (req, res) => {
  res.send("Hello Test! CI/CD");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
