import mongoose from "mongoose";
const articleSchema = mongoose.Schema({
  title: String,
  createdOn: String,
  content: String,
  image: String,
});
export const db = mongoose.createConnection("mongodb://localhost/myBlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const Article = db.model("Article", articleSchema);
export default Article;