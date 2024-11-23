import portfolio from "../models/portfolioModel.js";

export const createPortfolio = async (req, res) => {
  try {
    const newPortfolio = new portfolio(req.body);

    await newPortfolio.save();

    return res.status(201).json({
      success: true,
      message: "Portfolio created successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Server error ${err}`,
    });
  }
};

export const getPortfolios = async (req, res) => {
  try {
    const portfolios = await portfolio.find();
    res.status(200).json(portfolios);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${err}` });
  }
};

export const getPortfolioById = async (req, res) => {
  const { id } = req.params;
  try {
    const portfolios = await portfolio.findOne({ _id: id });
    if (!portfolios) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    res.status(200).json(portfolios);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${err}` });
  }
};

export const updatePortfolio = async (req, res) => {
  const { id } = req.params;
  const { picture } = req.body;
  try {
    const updatedPortfolio = await portfolio.findByIdAndUpdate(
      id,
      { picture: picture },
      { new: true }
    );
    if (updatePortfolio) {
      return res.status(200).json({
        success: true,
        message: "Portfolio updated successfully!",
      });
    }
    return res.status(400).json({
      success: false,
      message: "Portfolio not updated!",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${err}` });
  }
};

export const deletePortfolio = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPortfolio = await portfolio.findByIdAndDelete(id);
    if (deletePortfolio) {
      return res.status(200).json({
        success: true,
        message: "Portfolio deleted successfully!",
      });
    }
    return res.status(400).json({
      success: false,
      message: "Portfolio not deleted!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Server error ${err}`,
    });
  }
};
