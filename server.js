import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
	console.log("MongoDB connected");
	app.listen(PORT, () => {
		console.log(`Server is running on PORT ${PORT}`);
	})
})
.catch(err => console.error("MongoDB connection error", err));