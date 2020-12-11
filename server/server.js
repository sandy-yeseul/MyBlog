import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import callback from "./Callback/callback.js";
import {
  get_articleList,
  post_article,
  get_article,
  put_article,
  delete_article,
} from "./Controller/controller.js";

const app = express();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.all("*", upload.single("image"), (req, res, next) => {
  if (req.file) req.body.image = `image/${req.file.filename}`;
  next();
});

app.get("/", (req, res) => {
  res.send("HEllo world");
});
app.get("/api/articles", callback(get_articleList));
app.post("/api/articles", callback(post_article));
app.get("/api/articles/:id", callback(get_article));
app.put("/api/articles/:id", callback(put_article));
app.delete("/api/articles/:id", callback(delete_article));

app.listen(2020, () => console.log("Blog is running on port 2020"));
