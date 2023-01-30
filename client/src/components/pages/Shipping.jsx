import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import { Country } from "country-state-city";
import { Navigate, useNavigate } from "react-router-dom";

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
  };
  return (
    <div>
      <div className="container--shipping">
        <div className="box--shipping">
          <h2 className="heading-shipping">Shipping and Customer details</h2>
          <form className="form--shipping" onSubmit={shippingSubmit}>
            <div>
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Postcode"
                required
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="PhoneNumber"
                required
                value={phoneNr}
                onChange={(e) => setPhoneNr(e.target.value)}
              />
            </div>
            <div>
              <select
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
              className="button--shipping"
              disabled={country ? false : true}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
