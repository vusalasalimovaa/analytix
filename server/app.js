import express from "express";
import "dotenv/config";
import "./src/config/dbConnection.js";

import portfolioRoutes from "./src/routers/portfolioRouter.js";
import servicesRoutes from "./src/routers/servicesRouter.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Analytix");
});

app.use("/api/portfolio", portfolioRoutes);
app.use("/api/services", servicesRoutes);


app.listen(PORT, () => {
  console.log(`Server listen ${PORT}`);
});
