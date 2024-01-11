import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

export const convertDate = (inputData) => {
  let convertDate =
    formatDistanceToNow(new Date(inputData).getTime(), { locale: ru }) +
    " назад";
  return convertDate[0].toUpperCase() + convertDate.slice(1);
};

export const convertPrice = (price) => {
  return price.toLocaleString("ru-RU") + " ₽";
};

export const salesStartDate = (date) => {
  const data = new Date(date);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return String(data.toLocaleString("ru", options)).slice(2);
};

export const closePhone = (phone) => {
  if (!phone || phone.length < 9) return;
  return phone.slice(0, phone.length - 9).trim() + " XXX XX XX";
};

export const declensionCommentWord = (num) => {
  if (num > 4 && num < 21) return num + " отзывов";
  if ((num + 20) % 10 === 1) return num + " отзыв";
  if ((num + 20) % 10 === 2 || (num + 20) % 10 === 3 || (num + 20) % 10 === 4)
    return num + " отзыва";
  return num + " отзывов";
};
