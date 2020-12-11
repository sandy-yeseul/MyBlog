import mongoose from "mongoose";
const articleSchema = mongoose.Schema({
  _id: String,
  title: String,
  publishedOn: String,
  content: String,
  image: String,
  hash: String,
});
export const db = mongoose.createConnection("mongodb://localhost/myBlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('db has been connected'))
const Article = db.model("Article", articleSchema);
export default Article;