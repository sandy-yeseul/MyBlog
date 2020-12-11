import {
  getArticleList,
  getArticle,
  saveArticle,
  updateArticle,
  removeArticle,
} from "../DataHandling/dataHandling.js";
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
async function get_articleList() {
  try {
    const articles = await getArticleList();
    if (articles.length === 0) return { code: code.noContent, body: null };
    return { code: code.ok, body: articles };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
async function post_article(req) {
  try {
    const saved = await saveArticle(req.body);
    return { code: code.created, body: saved };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
async function get_article(req) {
  try {
    const article = await getArticle(req.params.id);
    return { code: code.ok, body: article };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
async function put_article(req) {
  try {
    const updated = await updateArticle(req.params.id, req.body);
    return { code: code.created, body: updated };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
async function delete_article(req) {
  try {
    const deleted = await removeArticle(req.params.id);
    return { code: code.ok, body: deleted };
  } catch (err) {
    return { code: code.badRequest, body: err.message };
  }
}
export {
  get_articleList,
  post_article,
  get_article,
  put_article,
  delete_article,
};
