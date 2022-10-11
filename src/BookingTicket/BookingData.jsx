import React, { Component } from "react";
import { connect } from "react-redux";
import { confirmBookingAction } from "./redux/actions/bookingAction";
import { convertNumberLocaleVN } from "./utils/System.utils";

class BookingData extends Component {
  render() {
    let { bookingList, bookedList } = this.props;
    let bookingTableRow = "",
      seatName,
      price = 0;
    if (bookingList.length) {
      bookingTableRow = bookingList.map((bookingItem, idx) => {
        seatName = bookingItem.row + bookingItem.name.toString();
        price = bookingItem.price;

        return (
          <div
            key={idx.toString + bookingItem.row + bookingItem.name}
            className="table__row flex items-center justify-center border border-t-0 border-gray-700"
          >
            <div className="w-6/12 py-2 border-r-[1px] border-gray-700">
              <p className="seat text-orange-500 font-medium">{seatName}</p>
            </div>
            <div className="w-6/12 py-2 border-gray-700">
              <p className="price text-orange-500 font-medium">
                {convertNumberLocaleVN(price)}
              </p>
            </div>
          </div>
        );
      });
      console.log(bookingTableRow);
    }
    return (
      <div className="booking-info">
        <ul className="seat__type flex items-center gap-5 mb-10">
          <li className="seat__type-booked flex items-center gap-3">
            <div className="type__color w-8 h-8 bg-green-500"></div>
            <p className="type__name ">Ghế đang chọn</p>
          </li>
          <li className="seat__type-booking flex items-center gap-3">
            <div className="type__color w-8 h-8 bg-red-800"></div>
            <p className="type__name ">Ghế đã đặt</p>
          </li>
          <li className="seat__type-empty flex items-center gap-3">
            <div className="type__color w-8 h-8 bg-gray-500"></div>
            <p className="type__name ">Ghế chưa đặt</p>
          </li>
        </ul>
        <div className="seat__table">
          <div className="caption">
            <h3 className="text-lg font-semibold mb-3">
              Thông tin ghế bạn đang lựa chọn
            </h3>
          </div>
          <div className="table-content mb-4">
            <div className="table__header">
              <div className="table__row flex items-center justify-center border border-gray-700">
                <div className="w-6/12 py-2 border-r-[1px] border-gray-700">
                  <p className="txt text-lg font-medium">Số ghế</p>
                </div>
                <div className="w-6/12 py-2 border-gray-700">
                  <p className="txt text-lg font-medium">Giá</p>
                </div>
              </div>
            </div>
            <div className="table__body">{bookingTableRow}</div>
            {/* <div className="table__body flex items-center justify-center border border-t-0 border-gray-700">
              <div className="w-6/12 py-2 border-r-[1px] border-gray-700">
                <p className="seat text-orange-500 font-medium">A1</p>
              </div>
              <div className="w-6/12 py-2 border-gray-700">
                <p className="price text-orange-500 font-medium">
                  {convertNumberLocaleVN(150000)}
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <button
          onClick={() => {
            this.props.handleConfirmBooking();
          }}
          className="border bg-blue-600 text-lg text-white rounded-md py-2 px-6 flex items-center justify-center cursor-pointer"
        >
          Xác nhận đặt chỗ
        </button>
        {bookedList.length ? (
          <div className="seat__booked-result">
            <div className="ticket-count">
              <p>Số vé đã đặt: {bookedList.length}</p>
            </div>
            <div className="booked-seat-count">
              <p>Ghế đã đặt: </p>
              <p>
                {bookedList
                  .map((bookedItem) => {
                    return bookedItem.row + bookedItem.name.toString();
                  })
                  .join(",")}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookingList: state.bookingReducer.bookingList,
  bookedList: state.bookingReducer.bookedList,
});

const mapDispatchToProps = (dispatch) => ({
  handleConfirmBooking: () => {
    dispatch(confirmBookingAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingData);
