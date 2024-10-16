
import express from "express";
import routes from "./routes.js";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
    console.log("DATABASE CONECTED!");
});




