import Article from "./db.js";
// Article.deleteMany({}, ()=>console.log("Delete All Documents within the collection"))

async function findAll() {
  try {
    const articles = await Article.find().select("-__v");
    return articles;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
async function findAllCondtion(condition) {
  try {
    const articles = await Article.find(condition).select("-__v");
    return articles;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
async function findById(id) {
  try {
    const article = await Article.findById(id).select("-__v");
    return article;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
async function findOne(condition) {
  try {
    const article = await Article.findOne(condition).select("-__v");
    return article;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
async function insert(data) {
  try {
    const article = await new Article(data);
    const savedArticle = await article.save();
    return savedArticle;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
async function update(id, item) {
  const options = { new: true };
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { $set: item },
      options
    ).select("-__v");
    return updatedArticle;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
async function remove(id) {
  try {
    const removedArticle = await Article.findByIdAndDelete(id).select("-__v");
    return removedArticle;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
const articleDb = {
  findAll,
  findAllCondtion,
  findById,
  findOne,
  insert,
  update,
  remove,
};
export default articleDb