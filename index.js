import express, { Router } from "express";
import Connection from "./database/db.js";
import router from "./routes/book-routes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/books', router);

const PORT = process.env.PORT || 8000;
Connection();

app.listen(PORT, () => {
    console.log(`server is started on port ${PORT}.`);
})
