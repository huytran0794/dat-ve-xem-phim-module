import { BOOK, CONFIRM_BOOK } from "../constant/const";

export const bookingAction = (seat) => ({
  type: BOOK,
  payload: seat,
});

export const confirmBookingAction = () => ({
  type: CONFIRM_BOOK,
});
