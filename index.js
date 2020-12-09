import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";

import Article from './Article.js';

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
app.get("/api/articles", async (req, res) => {
  //get all articles
  const articles = await Article.find();
  res.send(articles)
});
app.post("/api/articles", async(req, res) => {
  //post one article
  //get the content
  //make it in format
  //save in mongoose
  const article = await new Article(req.body);
  await article.save();
  res.send("OK")
});
app.get("/api/articles/:id", async(req, res) => {
  //get one article
  const id = req.params.id;
  const article = await Article.findById(id);
  res.send(article);
});
app.put("/api/articles/:id", async(req, res) => {
  //update one article
  const id = req.params.id;
  const article = {
      title: req.body.title,
      createdOn: req.body.createdOn,
      content: req.body.content
  }
  const newArticle = await Article.findByIdAndUpdate(id, {$set: article}, {new: true});
  res.send(newArticle);
});
app.delete("/api/articles/:id", async (req, res) => {
  //delete one article
  const id = req.params.id;
  await Article.findByIdAndRemove(id);
  res.send("OK")
});
mongoose
  .connect("mongodb://localhost/myBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.error(err));

app.listen(2020, () => console.log("Blog is running on port 2020"));
