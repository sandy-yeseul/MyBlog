import Article from "../DbController/Article.js";

async function allArticles() {
  const articles = await Article.find();
  return articles;
}
async function anArticle(req) {
  const id = req.params.id;
  const article = await Article.findById(id);
  return article;
}
export { allArticles, anArticle };
