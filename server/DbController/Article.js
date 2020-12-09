import mongoose from 'mongoose';
const articleSchema = mongoose.Schema({
    title: String,
    createdOn: String,
    content: String,
    image: String
});
const Article = mongoose.model("Article", articleSchema);
export default Article;