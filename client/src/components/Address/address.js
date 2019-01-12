import React from "react";
import "./address.css";

const AddressForm = ({
  show,
  userAddressInput,
  userAddressClose,
  userAddressSubmitForm
}) => {
  return (
    <div
      className={`${
        show ? "modal display-block address" : "modal display-none"
      } modal`}
    >
      <form className="col s12">
        <div
					href=""
          onClick={userAddressClose}
          className="modal-close btn-floating btn-small waves-effect waves-light red right"
        >
          {" "}
          <i className="material-icons">close</i>
        </div>

        <div className="row">
          <div className="modal-content">
            <input
              placeholder="Enter The Address"
              id="address"
              type="text"
              name="address"
              onChange={userAddressInput}
            />
            <label className="label">Address</label>
          </div>
        </div>

        <div className="row">
          <div className="modal-content col s6">
            <input
              placeholder="Enter City Name"
              id="city"
              type="text"
              name="cityName"
              onChange={userAddressInput}
            />
            <label className="label">City</label>
          </div>

          <div className="modal-content col s2">
            <input
              placeholder="State"
              id="city"
              type="text"
              name="state"
              onChange={userAddressInput}
            />

            {/* <select onChange={userAdressInput}>
              <option value="">Choose your option</option>
              <option value="1">AL</option>
              <option value="2">AK</option>
              <option value="3">AZ</option>
              <option value="4">AR</option>
              <option value="5">CA</option>
              <option value="6">CO</option>
              <option value="7">CT</option>
              <option value="8">DE</option>
              <option value="9">FL</option>
              <option value="10">GA</option>
              <option value="11">HI</option>
              <option value="12">ID</option>
              <option value="13">IL</option>
              <option value="14">IN</option>
              <option value="15">IA</option>
              <option value="16">KS</option>
              <option value="17">KY</option>
              <option value="18">LA</option>
              <option value="19">ME</option>
              <option value="20">MD</option>
              <option value="21">MA</option>
              <option value="22">MI</option>
              <option value="23">MN</option>
              <option value="24">MS</option>
              <option value="25">MO</option>
              <option value="26">MT</option>
              <option value="27">NE</option>
              <option value="28">NV</option>
              <option value="29">NH</option>
              <option value="30">NJ</option>
              <option value="31">NM</option>
              <option value="32">NY</option>
              <option value="33">NC</option>
              <option value="34">ND</option>
              <option value="35">OH</option>
              <option value="36">OK</option>
              <option value="37">OR</option>
              <option value="38">PA</option>
              <option value="39">RI</option>
              <option value="40">SC</option>
              <option value="41">SD</option>
              <option value="42">TN</option>
              <option value="43">TX</option>
              <option value="44">UT</option>
              <option value="45">VT</option>
              <option value="46">VA</option>
              <option value="47">WA</option>
              <option value="48">WV</option>
              <option value="49">WI</option>
              <option value="50">WY</option>
            </select> */}
            <label className="label">State</label>
          </div>

          <div className="modal-content col s4">
            <input
              placeholder="Zip"
              id="zip"
              type="text"
              name="zipCode"
              onChange={userAddressInput}
            />
            <label className="label">Zip</label>
          </div>
          <button
            className="submit btn"
            type="submit"
            onClick={userAddressSubmitForm}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
