export const sendUserCallOrderToServer = (data) => {
  const { firstName, phoneNumber, description } = data;
  alert(`Ma'lumotlar: ${firstName} ${phoneNumber} ${description}`);
};

export const getRandomNumber = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getPercentageBgColor = (percentage = 0) => {
  if (percentage >= 50) {
    return "bg-green-500";
  } else if (percentage >= 25) {
    return "bg-yellow-500";
  } else if (percentage > 0) {
    return "bg-red-500";
  } else {
    return "bg-black";
  }
};
