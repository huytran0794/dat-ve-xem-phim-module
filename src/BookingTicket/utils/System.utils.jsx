const convertNumberLocaleVN = (number) => {
  return parseFloat(number).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export { convertNumberLocaleVN };
