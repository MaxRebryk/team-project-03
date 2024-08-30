import { WatersCollection } from '../db/models/water.js';

export const addWater = async (payload, userId) => {
  const water = new WatersCollection({
    ...payload,
    userId,
  });
  await water.save();
  return water;
};

export const getAllWater = async (userId) => {
  const allPortionsOfWater = await WatersCollection.find({ userId });
  return allPortionsOfWater;
};

export const updateWater = async (id, payload, userId, options = {}) => {
  const rawResult = await WatersCollection.findOneAndUpdate(
    { _id: id, userId },
    payload,
    { new: true, ...options },
  );

  if (!rawResult) return null;

  return {
    waterData: rawResult,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteWater = async (id, userId) => {
  const water = await WatersCollection.findOneAndDelete({
    _id: id,
    userId,
  });
  return water;
};

export const getDailyNorma = async () => {
  return;
};
