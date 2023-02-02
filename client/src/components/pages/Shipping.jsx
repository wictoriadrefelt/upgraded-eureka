import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import { Country } from "country-state-city";
import { Navigate, useNavigate, Link } from "react-router-dom";
import "../../Styles/shipping.css";

function Shipping() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [postcode, setPostcode] = useState(shippingInfo.postcode);
  const [country, setCountry] = useState(shippingInfo.country);
  const [phoneNr, setPhoneNr] = useState(shippingInfo.phoneNr);

  const shippingSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingInfo({ address, city, country, postcode, phoneNr }));
    navigate("/confirm");
    e.reset();
  };
  return (
    <div className="shipping--main">
      <div className="container--shipping">
        <div className="box--shipping">
          <h2 className="heading-shipping">Enter your credentials</h2>
          <form className="form--shipping" onSubmit={shippingSubmit}>
            <div>
              <input
                className="shippingInput"
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <input
                className="shippingInput"
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <input
                className="shippingInput"
                type="text"
                placeholder="Postcode"
                required
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
            <div>
              <input
                className="shippingInput"
                type="text"
                placeholder="PhoneNumber"
                required
                value={phoneNr}
                onChange={(e) => setPhoneNr(e.target.value)}
              />
            </div>
            <div>
              <select
                className="shippingInput"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
              disabled={country ? false : true}
            />
          </form>
        </div>
        <Link className="backBtnConfirmOrder" to={`/cart`}>
          Back
        </Link>
        ;
      </div>
    </div>
  );
}

export default Shipping;
