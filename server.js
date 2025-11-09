import express from "express";
import { connectDB } from "./app/config/db.js";
import { userRoute } from "./app/routes/userRoute.js";
import { healthRoute } from "./app/routes/healthRoute.js";

const app = express();
const PORT = 3000;

await connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
});  
app.use("/users", userRoute);
app.use("/health", healthRoute);


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
