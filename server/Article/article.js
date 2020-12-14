import { v4 } from "uuid";
import md5 from "md5";
export default function makeArticle({
  _id = "",
  title,
  publishedOn,
  content,
  image = "",
  hash = "",
} = {}) {
  if (!title) throw new Error("Article must have Title");
  if (!publishedOn) throw new Error("Article must have published date");
  if (!content) throw new Error("Article must have content");

  if (title && !isMeaningfulText(title))
    throw new Error("Title doesn't have meaningful text");
  if (publishedOn && !isValidDate(publishedOn))
    throw new Error("Article must have valid published date");
  if (content && !isMeaningfulText(content))
    throw new Error("Content doesn't have meaningful text");

  if (!_id) _id = generateId();
  if (!hash) hash = makeContentHash(content);
  publishedOn = formatDate(publishedOn);

  return Object.freeze({
    _id: _id,
    title: title,
    publishedOn: publishedOn,
    content: content,
    image: image,
    hash: hash,
  });
}
/** NOTE article page's note
 * JOB:
 * 1. get data
 * 2. validate all data
 * 3. non-valid article cannot never be saved. every format-error will be thrown here
 * 4. create object and return
 * only: make valid article, no duplicate check
 *
 * Mandatory field: id, title, publishedOn, content
 * id must be unique
 * title must be unique -> can change.. but shouldn't it be? -> not here, will be checked outside
 * published date must be valid ISO 8601(yyyy-mm-dd hh:mm:ss)
 * content must be unique
 * image must be unique within the article
 */
function generateId() {
  let uuid = v4();
  const uniqueId = uuid.replace(/-/g, "");
  return uniqueId;
}
function isValidDate(str) {
  const date = new Date(str);
  return !isNaN(date);
}
function isMeaningfulText(str){
 const getText = str.replace(/\s/g, '');
 if(getText.length > 0) return true;
 return false;
}
function formatDate(date) {
  date = new Date(date);
  const currentTime = new Date();
  const offset = currentTime.getTimezoneOffset();
  const getDate = new Date(date.getTime() - offset * 60 * 1000);
  const converted = getDate.toISOString().replace("T", " ").split(".")[0];
  return converted;
}
function makeContentHash(content) {
  return md5(content);
}
