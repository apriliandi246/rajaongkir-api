import fetch from "node-fetch";
import cors from "../../utils/cors";
import API_KEY from "../../api-key/api-key";
import runMiddleware from "../../utils/runMiddleware";

export default async function handler(req, res) {
	let endPoint;
	const query = req.query;
	const result = { rajaongkir: {} };

	await runMiddleware(req, res, cors);

	if (req.method === "GET") {
		if (query.hasOwnProperty("provinsiId") === true) {
			endPoint = `https://api.rajaongkir.com/starter/province?key=${API_KEY}&id=${req.query.provinsiId}`;
		} else {
			endPoint = `https://api.rajaongkir.com/starter/province?key=${API_KEY}`;
		}

		const response = await fetch(endPoint, { method: "GET" });
		const data = await response.json();

		result.rajaongkir.status = data.rajaongkir.status;
		result.rajaongkir.results = data.rajaongkir.results;

		res.status(200).json(result);
	}
}
