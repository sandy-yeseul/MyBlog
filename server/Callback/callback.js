const responseHeaders = {
  "Content-Type": "application/json",
  "Last-Modified": new Date().toUTCString(),
};
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
