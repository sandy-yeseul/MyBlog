import articleDb from "../DbController/dbActions.js";

async function allArticles() {
  try {
    const articles = await articleDb.findAll();
    if (articles.length === 0) return { code: 204, body: null };
    return { code: 200, body: articles };
  } catch (err) {
    return { code: 400, body: err.message };
  }
}
async function postArticle(req) {
  try {
    if (!req.body.title || !req.body.createdOn || !req.body.content)
      throw new Error("Required information missing");
    const savedArticle = await articleDb.insert(req.body);
    if (!savedArticle) throw new Error("didn't saved?");
    return { code: 201, body: savedArticle };
  } catch (err) {
    return { code: 400, body: err.message };
  }
}
async function anArticle(req) {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Can't find ID");
    const article = await articleDb.findById(id);
    if (!article) throw new Error("Couldn't find");
    return { code: 200, body: article };
  } catch (err) {
    return { code: 400, body: err.message };
  }
}
async function updateArticle(req) {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Can't find ID");
    if (!req.body.title || !req.body.createdOn || !req.body.content)
      throw new Error("Required information missing");
    const article = {
      title: req.body.title,
      createdOn: req.body.createdOn,
      content: req.body.content,
    };
    const newArticle = await articleDb.update(id, article);
    if (!newArticle) throw new Error("Couldn't update");
    return { code: 201, body: newArticle };
  } catch (err) {
    return { code: 400, body: err.message };
  }
}
async function deleteArticle(req) {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Can't find ID");
    const deleted = await articleDb.remove(id);
    if (!deleted) throw new Error("Error on deleting");
    return { code: 200, body: deleted };
  } catch (err) {
    return { code: 400, body: err.message };
  }
}
export { allArticles, anArticle, postArticle, updateArticle, deleteArticle };