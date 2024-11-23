import expess from "express";

import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService
} from '../controllers/servicesController.js';

const servicesRoutes = expess.Router()

servicesRoutes.post("/", createService);
servicesRoutes.get('/', getServices)
servicesRoutes.get("/:id", getServiceById);
servicesRoutes.delete("/:id", deleteService);
servicesRoutes.put("/:id", updateService);

export default servicesRoutes;
