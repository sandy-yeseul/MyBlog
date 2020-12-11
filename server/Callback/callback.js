const responseHeaders = {
  "Content-Type": "application/json",
  "Last-Modified": new Date().toUTCString(),
};
/**
 * 1. get framework's request, format(extract) data and send to controller
 * 2. get result from controller, no determine, format response and send it
 * 3. if there's error, send error message(during the controller, but it should be caught and formatted to message)
 * only things doing here: get request, format it, send to controller, get result, format response, send response(no data edition)
 */
export default function (controller) {
  return async (req, res) => {
    const httpRequest = await httpRequestFormat(req);
    const data = await controller(httpRequest);
    res.set(responseHeaders); // TODO header need?
    res.status(data.code).send(data.body); // TODO response 좀 더 다듬기(cookie set || cookieClear 어떻게 대처할것인가?)
  };
}
function httpRequestFormat(req = {}) {
  return Object.freeze({
    protocol: req.protocol,
    path: req.path,
    method: req.method,
    params: req.params,
    query: req.query,
    cookies: req.cookies,
    ip: req.ip,
    body: req.body,
  });
}
