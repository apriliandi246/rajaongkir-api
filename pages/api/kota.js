import fetch from "node-fetch";
import cors from "../../utils/cors";
import API_KEY from "../../api-key/api-key";
import runMiddleware from "../../utils/runMiddleware";

let endPoint = `https://api.rajaongkir.com/starter/city?key=${API_KEY}`;

export default async function handler(req, res) {
	const result = {
		rajaongkir: {},
	};

	await runMiddleware(req, res, cors);

	if (req.method === "GET") {
		const query = req.query;

		if (query.hasOwnProperty("provinsiId") === true) {
			endPoint += `&province=${req.query.provinsiId}`;
		}

		if (query.hasOwnProperty("kotaId") === true) {
			endPoint += `&id=${req.query.kotaId}`;
		}

		if (
			query.hasOwnProperty("kotaId") === true &&
			query.hasOwnProperty("provinsiId") === true
		) {
			endPoint += `&id=${req.query.kotaId}&province=${req.query.provinsiId}`;
		}

		const response = await fetch(endPoint, { method: "GET" });
		const data = await response.json();

		result.rajaongkir.status = data.rajaongkir.status;
		result.rajaongkir.results = data.rajaongkir.results;

		res.status(200).json(result);
	}
}
