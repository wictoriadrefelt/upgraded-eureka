import React from "react";
import { Link } from "react-router-dom";
import Header from "../view/Header";
import "../../Styles/aboutUs.css";

const AboutUs = () => {
  document.title = "IneedIT AboutUs";
  {
    return (
      <>
        <Header />
        <div className="aboutUsMain">
          <div className="aboutUsContainer">
            <h1 className="aboutUsTitle">About Us</h1>
            <p className="aboutUsParagraph">
              Welcome to IneedIT, your one-stop shop for all things web
              development. Our mission is to help aspiring web developers
              achieve their goals by providing them with high-quality,
              easy-to-use products.
            </p>
            <p className="aboutUsParagraph">
              We understand the challenges that come with learning web
              development, which is why we offer a wide range of products
              designed to make the process smoother and more efficient. From
              helpful guides and tutorials to cutting-edge software tools, we
              have everything you need to excel in the field.
            </p>
            <p className="aboutUsParagraph">
              Our team of experts has extensive experience in web development
              and is dedicated to providing you with the support you need to
              succeed. Whether you're just starting out or looking to enhance
              your skills, we are here to help you every step of the way.
            </p>
            <p className="aboutUsParagraph">
              We are committed to delivering the highest levels of customer
              satisfaction and are proud to offer a 100% satisfaction guarantee
              on all of our products. So why wait? Start your journey to
              becoming a web development expert today with IneedIT.
            </p>
          </div>
          <Link className="" to={`/home`}>
            <div className="backBtn">Back</div>
          </Link>
        </div>
      </>
    );
  }
};

export default AboutUs;
