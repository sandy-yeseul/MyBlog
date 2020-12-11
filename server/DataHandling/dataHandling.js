/***
 * 1. get data from controller
 * 2. check data
 * 3. handle data
 * 4. return data
 * 5. throw error(if)
 */
import articleDb from "../DbController/dbActions.js";
async function getArticleList() {
  try {
    const articleList = await articleDb.findAll();
    return articleList;
  } catch (err) {
    throw new Error(err.message);
  }
}
async function getArticle(id) {
  try {
    if (!id) throw new Error("Can't find ID");
    const article = await articleDb.findById(id);
    if (!article) throw new Error("Article doesn't exist");
  } catch (err) {
    throw new Error(err.message);
  }
}
async function saveArticle(body) {
  try {
    if (!body.title || !body.createdOn || !body.content)
      throw new Error("Required information missing");
    const posted = await articleDb.insert(body); // maybe format somehow
    if (!posted) throw new Error("Error on posting article");
    return posted;
  } catch (err) {
    throw new Error(err.message);
  }
}
async function updateArticle(id, body) {
  try {
    if (!id) throw new Error("Can't find ID");
    if (!body.title && !body.content)
      throw new Error("Required information missing"); // missing only both of them. there might be updating only title or only content
    const article = {
      title: body.title,
      createdOn: body.createdOn,
      content: body.content,
    }; // but it will have full information since it's updating based on previous data(client side)
    // TODO need to format updating article
    const updated = await articleDb(id, article);
    if (!updated) throw new Error("Error on updating article");
    return updated;
  } catch (err) {
    throw new Error(err.message);
  }
}
async function removeArticle(id) {
  try {
    if (!id) throw new Error("Can't find ID");
    const deleted = await articleDb.remove(id);
    if (!deleted) throw new Error("Error on deleting article");
    return deleted;
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
