import Article from '../DbController/db.js';

async function allArticles() {
  const articles = await Article.find();
  return articles;
}
async function postArticle(req) {
  const article = await new Article(req.body);
  await article.save();
  return "OK";
}
async function anArticle(req) {
  const id = req.params.id;
  const article = await Article.findById(id);
  return article;
}
async function updateArticle(req) {
  const id = req.params.id;
  const article = {
    title: req.body.title,
    createdOn: req.body.createdOn,
    content: req.body.content,
  };
  const newArticle = await Article.findByIdAndUpdate(
    id,
    { $set: article },
    { new: true }
  );
  return newArticle;
}
async function deleteArticle(req){
    const id = req.params.id;
    await Article.findByIdAndRemove(id);
    return "DELTED"
}
export { allArticles, anArticle, postArticle,updateArticle, deleteArticle,};
