import { model, Schema, Types } from 'mongoose';

//зберігання даних про споживання води в базі даних
const watersSchema = new Schema(
  {
    date: { type: Date, required: true },
    volume: { type: Number, required: true },
    userId: { type: Types.ObjectId, ref: 'users', required: false },
  },
  { timestamps: true, versionKey: false }
);

export const WatersCollection = model('waters', watersSchema);
