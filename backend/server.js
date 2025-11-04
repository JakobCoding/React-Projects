import express from "express";
import dotenv from "dotenv"; 

dotenv.config();

const app = express();

app.get("/prducts", (req, res) => {});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    console.log("server started at http://localhost:5000");
});

// MongoDB PassWord: tLwtTwkt9xVFPWoA