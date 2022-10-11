import { BOOK, CONFIRM_BOOK } from "../constant/const";
import { seatList } from "../../data/data";
const initialState = {
  seatList,
  bookingList: [],
  bookedList: [],
};

export let bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK:
      let { row, name, booked } = payload;
      if (!booked) {
        let selectedSeatIdx = state.bookingList.findIndex(
          (bookingItem) => bookingItem.row === row && bookingItem.name === name
        );

        if (selectedSeatIdx > -1) {
          state.bookingList.splice(selectedSeatIdx, 1);
          state.bookingList = [...state.bookingList];
          return { ...state };
        }

        state.bookingList = [...state.bookingList, payload];
      }
      return { ...state };
    case CONFIRM_BOOK:
      if (state.bookingList.length) {
        state.bookingList.forEach((item) => (item.booked = true));
        state.bookedList = [...state.bookedList, ...state.bookingList];
        state.bookingList = [];
        state.bookingList = [...state.bookingList];
      }
      return { ...state };
    default:
      return state;
  }
};
