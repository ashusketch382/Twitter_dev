import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

import connect from "./config/database.js";
import ApiRoutes from "./routes/index.js"

const PORT = 3000;
app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await connect();
    console.log("mongo db connected");
    app.use('/api', ApiRoutes);
});
