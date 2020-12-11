import articleDb from "../DbController/dbActions.js";
import makeArticle from "../Article/article.js";
/** NOTE
 * 1. get data from controller
 * 2. check data
 * 3. handle data
 * 4. return data
 * 5. throw error(if)
 */
async function getArticleList() {
  try {
    const articleList = await articleDb.findAll();
    return makeArticleList(articleList);
  } catch (err) {
    throw new Error(err.message);
  }
}
async function getArticle(id) {
  try {
    if (!id) throw new Error("Can't find ID");
    const article = await articleDb.findById(id);
    if (!article) throw new Error("Article doesn't exist");
    return makeArticle(article);
  } catch (err) {
    throw new Error(err.message);
  }
}
async function saveArticle(body) {
  try {
    if (!body.title || !body.publishedOn || !body.content)
      throw new Error("Required information missing");
    const article = makeArticle(body);
    const posted = await articleDb.insert(article); // maybe format somehow
    if (!posted) throw new Error("Error on posting article");
    return makeArticle(posted);
  } catch (err) {
    throw new Error(err.message);
  }
}
async function updateArticle(id, body) {
  try {
    if (!id) throw new Error("Can't find ID");
    if (!body.title && !body.content)
      throw new Error("Required information missing"); // missing only both of them. there might be updating only title or only content
    const format = makeArticle(body);
    const article = {...format}
    delete article._id
    const updated = await articleDb.update(id, article);
    if (!updated) throw new Error("Error on updating article");
    return makeArticle(updated);
  } catch (err) {
    throw new Error(err.message);
  }
}
async function removeArticle(id) {
  try {
    if (!id) throw new Error("Can't find ID");
    const deleted = await articleDb.remove(id);
    if (!deleted) throw new Error("Error on deleting article");
    return makeArticle(deleted);
  } catch (err) {
    throw new Error(err.message);
  }
}
export {
  getArticleList,
  getArticle,
  saveArticle,
  updateArticle,
  removeArticle,
};
function makeArticleList(list) {
  const formatted = list.map((article) => makeArticle(article));
  return formatted;
}
