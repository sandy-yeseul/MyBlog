import articleDb from "../DbController/dbActions.js";
const code = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
};
/**
 * 1. get request. extract necessary information and send to data handling
 * 2. get result(data) and check the result(whether acceptable, no content, error)
 * 3. based on the result, determine code and format return value with code and body
 * doing - no data handling, determine code based on result, format return value
 * if there's error in data handling, accept it, format it to body(no throwing error, error is caught here), set code
 */
async function allArticles() {
  try {
    const articles = await articleDb.findAll();
    if (articles.length === 0) return { code: code.noContent, body: null };
    return { code: code.ok, body: articles };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
async function postArticle(req) {
  try {
    if (!req.body.title || !req.body.createdOn || !req.body.content)
      throw new Error("Required information missing");
    const savedArticle = await articleDb.insert(req.body);
    if (!savedArticle) throw new Error("didn't saved?");
    return { code: code.created, body: savedArticle };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
async function anArticle(req) {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Can't find ID");
    const article = await articleDb.findById(id);
    if (!article) throw new Error("Couldn't find");
    return { code: code.ok, body: article };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
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
    return { code: code.created, body: newArticle };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
async function deleteArticle(req) {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Can't find ID");
    const deleted = await articleDb.remove(id);
    if (!deleted) throw new Error("Error on deleting");
    return { code: code.ok, body: deleted };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
export { allArticles, anArticle, postArticle, updateArticle, deleteArticle };
