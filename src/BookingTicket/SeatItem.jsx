import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingAction } from "./redux/actions/bookingAction";
class SeatItem extends Component {
  render() {
    let { row, seatItem, bookingList, bookedList } = this.props;
    let isBooking = bookingList.findIndex(
      (bookingItem) =>
        bookingItem.row === row && bookingItem.name === seatItem.name
    );
    let isBooked = bookedList.findIndex(
      (bookedItem) =>
        bookedItem.row === row && bookedItem.name === seatItem.name
    );
    let classColor = "bg-gray-400 hover:bg-orange-300";
    if (isBooking > -1) {
      classColor = "bg-green-400";
    }

    if (isBooked > -1) {
      classColor = "bg-red-800";
    }

    return (
      <div
        onClick={() => {
          isBooked > -1 && (seatItem.booked = true);
          this.props.handleBookSeat({
            row,
            ...seatItem,
          });
        }}
        className={`seat-box border w-7 h-7 flex justify-center items-center  text-white duration-500 cursor-pointer rounded ${classColor}`}
      >
        <span className="txt">{seatItem.name}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookingList: state.bookingReducer.bookingList,
  bookedList: state.bookingReducer.bookedList,
});

const mapDispatchToProps = (dispatch) => ({
  handleBookSeat: (value) => {
    dispatch(bookingAction(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatItem);
