import expess from "express";

import {
  createPortfolio,
  getPortfolios,
  getPortfolioById,
  updatePortfolio,
  deletePortfolio,
} from "../controllers/portfolioController.js";

const portfolioRoutes = expess.Router()

portfolioRoutes.post("/", createPortfolio);
portfolioRoutes.get('/', getPortfolios)
portfolioRoutes.get("/:id", getPortfolioById);
portfolioRoutes.delete("/:id", deletePortfolio);
portfolioRoutes.put("/:id", updatePortfolio);

export default portfolioRoutes;
