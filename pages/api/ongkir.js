import cors from "../../utils/cors";
import runMiddleware from "../../utils/runMiddleware";

export default async function handler(req, res) {
	await runMiddleware(req, res, cors);

	if (req.method === "POST") {
		const response = await fetch("https://api.rajaongkir.com/starter/cost", {
			method: "POST",
			headers: {
				key: process.env.API_KEY,
				"Content-Type": "application/json",
			},
			body: req.body,
		});

		const result = await response.json();
		res.status(200).json(result);
	}
}
