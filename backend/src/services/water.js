import { WatersCollection } from '../db/models/water.js';


export const addWater = async payload => {
  const water = new WatersCollection({
    ...payload,
  });
  await water.save();
  return water;
};

export const getAllWater = async () => {
    const allPortionsOfWater = await WatersCollection.find();
    return allPortionsOfWater;
};

export const updateWater = async (id, payload, options = {}) => {
  const rawResult = await WatersCollection.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true, ...options }
  );

  if (!rawResult) return null;

  return {
    waterData: rawResult,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteWater = async id => {
  const water = await WatersCollection.findOneAndDelete({
    _id: id,
  });
  return water;
};

export const getDailyNorma = async () => {
  return;
};
