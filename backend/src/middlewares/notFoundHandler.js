
export const notFoundHandler = (_req, res, next) => {
  res.status(404).json({
    message: 'Contact not found',

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Route not found',

  });
};
