import { WatersCollection } from '../db/models/water.js';
import { validateDate } from '../validation/dateValidation.js';
import { UsersCollection } from '../db/models/user.js';
import { reformDate } from '../utils/reformDate.js';

//створює новий запис у колекції
export const addWater = async (userId, payload) => {
  const water = await WatersCollection.create({ userId, ...payload });
  return water; //повертає збережений об'єкт води.
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
  return water; //видалений об'єкт води
};

//обчислює щоденне споживання води для конкретного користувача за певну дату
export const fetchDailyService = async (userId, dateString) => {
  if (!validateDate(dateString)) {
    //перевірка дати
    throw new Error('Invalid date format');
  }
  //генерується початкова і кінцева дата для запиту даних
  const [year, month, day] = dateString.split('-');
  const startDate = new Date(`${year}-${month}-${day}T00:00:00Z`);
  const endDate = new Date(startDate);
  endDate.setUTCDate(endDate.getUTCDate() + 1);

  try {
    //отримання даних
    const dailyConsumption = await WatersCollection.find({
      userId,
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    if (!dailyConsumption || dailyConsumption.length === 0) {
      return { dateOrMonth: dateString, data: [] }; // Повернути порожній масив, якщо даних немає
    }
    const user = await UsersCollection.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    //обчислює загальну кількість випитої води
    const totalConsumption = dailyConsumption.reduce(
      (total, record) => total + record.volume,
      0,
    );
    //обчислює відсоток від денної норми користувача
    const percentageOfDailyIntake = (totalConsumption / user.dailyNorma) * 100;

    return {
      //дані повертаються у форматі об'єкта
      dateOrMonth: dateString,
      data: dailyConsumption,
      totalConsumption,
      percentageOfDailyIntake: percentageOfDailyIntake.toFixed(2),
    };
  } catch (error) {
    throw new Error('Server error');
  }
};

//обчислює щоденне споживання води для конкретного користувача за місяць
export const fetchMonthlyService = async (userId, dateString) => {
  if (!validateDate(dateString)) {
    throw new Error('Invalid date format');
  }
  //визначаються початкова і кінцева дати місяця
  const [year, month] = dateString.split('-');
  const startDate = new Date(Date.UTC(year, month - 1, 1));
  const endDate = new Date(Date.UTC(year, month, 1));

  // Знаходимо дані про споживання води за місяць
  const monthlyConsumption = await WatersCollection.find({
    userId,
    createdAt: {
      $gte: startDate,
      $lt: endDate,
    },
  });

  // Отримуємо користувача для доступу до денної норми води
  const user = await UsersCollection.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  const dailyNorma = user.dailyNorma; // Денна норма води

  // Створюємо об'єкт для зберігання споживання води за кожен день
  const dailyConsumptionMap = {};
  const daysInMonth = new Date(year, month, 0).getDate();
  let totalMonthlyConsumption = 0;

  for (let day = 1; day <= daysInMonth; day++) {
    const dayKey = `${year}-${month.padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    dailyConsumptionMap[dayKey] = 0;
  }

  // Заповнюємо об'єкт даними про споживання води
  monthlyConsumption.forEach((record) => {
    const dayKey = record.createdAt.toISOString().slice(0, 10);
    dailyConsumptionMap[dayKey] += record.volume;
    totalMonthlyConsumption += record.volume;
  });

  // Формуємо масив з результатами
  const dailyResults = [];
  for (const [date, totalConsumption] of Object.entries(dailyConsumptionMap)) {
    const consumptionPercentage = (totalConsumption / dailyNorma) * 100;
    dailyResults.push({
      date,
      totalConsumption,
      consumptionPercentage,
    });
  }

  return {
    month: dateString,
    totalMonthlyConsumption,
    dailyResults,
  };
};

//код дозволяє керувати даними про споживання води, а також обчислювати щоденне та щомісячне споживання води
