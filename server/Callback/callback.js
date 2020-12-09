export default function (controller) {
  return async (req, res) => {
    const result = await controller(req);
    res.status(result.code).send(result.body);
  };
}
