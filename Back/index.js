import express from "express";
import indexDb from "./src/DB/IndexDB.js";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./src/routes/UserRoute.js";
import ItemRoutes from "./src/routes/ItemRoutes.js";
import categoryRoute from "./src/routes/CategoryRoute.js";

dotenv.config();

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api config
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/item", ItemRoutes);
app.use("/api/v1/Category", categoryRoute);

indexDb()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("hello world");
    });

    app.listen(PORT, () => console.log("server running on port:", PORT));
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  });
