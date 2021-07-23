import Cors from "cors";

const cors = Cors({
	methods: ["GET", "POST"],
	origin: "*",
});

export default cors;
