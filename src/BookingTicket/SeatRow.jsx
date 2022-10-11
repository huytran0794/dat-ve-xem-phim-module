import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingAction } from "./redux/actions/bookingAction";
import SeatItem from "./SeatItem";
class SeatRow extends Component {
  render() {
    let { row, seatArr } = this.props.seat;
    return (
      <div className="seatRow flex justify-center items-center gap-10">
        <span className="name block">{row}</span>
        <div className="seatList flex flex-wrap justify-center items-center gap-4">
          {/* <div className="seat-box bg-gray-400 border border-gray-400 w-7 h-7 flex justify-center items-center text-white hover:bg-black  duration-500 cursor-pointer rounded">
            1
          </div> */}
          {seatArr.map((seatItem, idx) => {
            return <SeatItem key={row + idx} seatItem={seatItem} row={row} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookingList: state.bookingReducer.bookingList,
});

const mapDispatchToProps = (dispatch) => ({
  handleBookSeat: (value) => {
    dispatch(bookingAction(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatRow);
