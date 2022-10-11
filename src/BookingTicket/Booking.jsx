import React, { Component } from "react";
import BookingData from "./BookingData";
import BookingUser from "./BookingUser";
import SeatList from "./SeatList";

class Booking extends Component {
  render() {
    console.log("Booking re-render");
    return (
      <>
        <header>
          <h5 className="text-3xl text-yellow-600 font-medium capitalize text-center">
            Đặt vé xem phim cyberlearn.vn
          </h5>
        </header>
        <main>
          <section className="bookingSection mt-10">
            <div className="container w-full h-full">
              <div className="content-wrapper">
                <div className="seatHeader flex justify-between items-center bg-gray-400/30 px-5 py-2 mb-4">
                  <h5 className="font-medium text-slate-500 capitalize text-xl">
                    Chọn ghế
                  </h5>
                  <div className="control">
                    <div className="btn-rebook flex justify-center items-center bg-white py-2 px-5 border border-gray-500 rounded text-slate-700 uppercase cursor-pointer hover:bg-gray-500 hover:text-white duration-500">
                      <span className="txt">Đặt lại</span>
                    </div>
                  </div>
                </div>
                <BookingUser />
                <div className="seatBooking mt-6 flex justify-center ">
                  <div className="right w-7/12 h-full px-10 bg-[#f9f8f3]">
                    <SeatList />
                    <div className="mt-10 screen bg-gray-500 text-center mx-auto w-4/5 ">
                      <span className="text-white text-lg">Màn hình đây</span>
                    </div>
                  </div>
                  <div className="left w-5/12 h-full px-10">
                    <BookingData />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Booking;
