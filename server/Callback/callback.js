
export default function (controller){
    return async (req, res) => {
        const result = await controller(req);
        res.send(result);
    }
}