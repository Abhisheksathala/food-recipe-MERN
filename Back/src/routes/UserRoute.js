import express from "express";

const userRoute = express.Router();

//importar controlador
userRoute.get("/", (req, res) => {
  res.send("Foom the userRoute");
});
userRoute.post("/login");
userRoute.post("/singup");

export default userRoute;
