export const sendUserCallOrderToServer = (data) => {
  const { firstName, phoneNumber, description } = data;
  alert(`Ma'lumotlar: ${firstName} ${phoneNumber} ${description}`);
};

export const getRandomNumber = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
