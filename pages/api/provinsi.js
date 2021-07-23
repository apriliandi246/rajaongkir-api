import fetch from "node-fetch";
import cors from "../../utils/cors";
import API_KEY from "../../api-key/api-key";
import runMiddleware from "../../utils/runMiddleware";

let endPoint = `https://api.rajaongkir.com/starter/province?key=${API_KEY}`;

export default async function handler(req, res) {
	await runMiddleware(req, res, cors);

	if (req.method === "GET") {
		const query = req.query;

		if (query.hasOwnProperty("provinsiId") === true) {
			endPoint += `&id=${req.query.provinsiId}`;
		}

		const response = await fetch(endPoint, { method: "GET" });
		const data = await response.json();

		res.status(200).json(data);
	}
}