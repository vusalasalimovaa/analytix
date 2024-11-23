import service from "../models/servicesModel.js";

export const createService = async (req, res) => {
  try {
    const newService = new service(req.body);

    await newService.save();
    return res.status(201).json({
      success: true,
      message: "Service created successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Server error ${err}`,
    });
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await service.find();
    res.status(200).json(services);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Server error ${err}`,
    });
  }
};

export const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const services = await service.findOne({ _id: id });
    if (!services) {
      return res.status(404).json({
        success: false,
        message: "Service not found!",
      });
    }
    return res.status(200).json(services);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Server error ${err}`,
    });
  }
};

export const updateService = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedService = await service.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    if (!updatedService) {
      return res.status(404).json({ error: "Service not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Service updated successfully!" });
  } catch (err) {
    return res.status(500).json({ error: "Failed to update service" });
  }
};

export const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await service.findByIdAndDelete(id);
    if (deleteService) {
      return res.status(200).json({
        success: true,
        message: "Service deleted successfully!",
      });
    }
    return res.status(400).json({
      success: false,
      message: "Service not deleted!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Server error ${err}`,
    });
  }
};
