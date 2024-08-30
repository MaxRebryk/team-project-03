import {
  addWater,
  deleteWater,
  getAllWater,
  getDailyNorma,
  updateWater,
} from '../services/water.js';

export const getWaterController = async (req, res) => {
  const userId = req.user._id;
  const waterPortions = await getAllWater(userId);
  res.status(200).json({
    status: 200,
    message: `Success!`,
    data: waterPortions,
  });
};
export const addWaterController = async (req, res) => {
  const userId = req.user._id;
  const waterData = {
    ...req.body,
  };
  const newPortion = await addWater(waterData, userId);
  res.status(201).json({
    status: 201,
    message: `Successfully add water!`,
    data: newPortion,
  });
};
export const updateWaterController = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const result = await updateWater(
    id,
    {
      ...req.body,
    },
    userId,
  );
  if (!result) {
    return res.status(404).json({ message: 'Water not found' });
  }
  res.json({
    status: 200,
    message: 'Successfully updated water data!',
    data: result,
  });
};
export const deleteWaterController = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const deletedWater = await deleteWater(id, userId);

  res.status(200).json({
    status: 200,
    message: 'Successfully deleted',
    data: deletedWater,
  });
};
export const getDailyNormaController = async (req, res) => {
  const data = await getDailyNorma();
  res.status(200).json({
    message: `Success!`,
    dailyNorma: data,
  });
};
