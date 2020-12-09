import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";

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
app.get("/api/articles", (req, res) => {
  //get all articles
  res.send({
    articles: {
      1: {
        Title: "Blah",
        Author: "ME",
        Created: "NOW",
        Content: "Choeseung has great voice. i love her!",
      },
      2: {
        Title: "Blah",
        Author: "ME",
        Created: "NOW",
        Content: "Choeseung has great voice. i love her!",
      },
    },
  });
});
app.post("/api/articles", (req, res) => {
  //post one article
  //get the content
  //make it in format
  //save in mongoose
});
app.get("/api/articles/:id", (req, res) => {
  //get one article
});
app.put("/api/articles/:id", (req, res) => {
  //update one article
});
app.delete("/api/articles/:id", (req, res) => {
  //delete one article
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
