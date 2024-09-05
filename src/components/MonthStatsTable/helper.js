export const formatDate = date => {
  const year = date.getFullYear();
  const mongth = getMonthName(date.getMonth());

  return `${mongth}, ${year}`;
};

function getMonthName(monthNumber) {
  const monthNames = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  return monthNames[monthNumber] || 'Січень';
}
