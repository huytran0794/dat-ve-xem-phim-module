import React, { Component } from "react";
import { connect } from "react-redux";
class BookingUser extends Component {
  render() {
    return (
      <div className="userInfoInput">
        <form action="#" className="flex items-center justify-center gap-3">
          <div className="form-group flex items-center gap-2">
            <input
              type="text"
              name="username"
              id=""
              placeholder="Input your username"
              onChange={(e) => {
                this.props.handleInput(e);
              }}
              className="border border-gray-300 py-3 pl-2 focus:border-black hover:border-black duration-500"
            />
            <select
              name="numberseat"
              className="numberseat p-3 border border-gray-300 text-gray-500 focus:border-black focus:text-black hover:border-black  duration-500"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group flex items-center gap-2">
            <input
              type="text"
              name="age"
              id=""
              placeholder="Input your age"
              onChange={() => {
                this.props.handleInput();
              }}
              className="border border-gray-300 py-3 pl-2 focus:border-black hover:border-black duration-500"
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn-save border border-gray-400 rounded text-center text-xl px-6 py-2"
            >
              Lưu thông tin
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// export default BookingUser;
const mapDispatchToProps = (dispatch) => ({
  handleInput: (e) => {
    console.log(e.target);
    console.log(dispatch);
  },
});
export default connect(mapDispatchToProps)(BookingUser);
