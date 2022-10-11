import React, { Component } from "react";
import { connect } from "react-redux";

import SeatRow from "./SeatRow";
class SeatList extends Component {
  render() {
    return (
      <div className="seatRowList flex flex-col gap-4">
        {this.props.seatList.map((seat, idx) => {
          return <SeatRow seat={seat} key={seat.row + idx} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  seatList: state.bookingReducer.seatList,
});

export default connect(mapStateToProps)(SeatList);
