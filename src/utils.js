export const sendUserCallOrderToServer = (data) => {
  const { firstName, phoneNumber, description } = data;
  alert(`Ma'lumotlar: ${firstName} ${phoneNumber} ${description}`);
};
