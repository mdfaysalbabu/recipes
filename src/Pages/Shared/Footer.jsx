import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaGlassCheers,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className="text-center py-2">
        <h2 className="fs-4 text-info">About Us</h2>
      </div>
      <Row className="text-center py-4 px-4 mx-auto">
        <Col lg={4} md={6} xm={12} className="">
          
            <FaGlassCheers className="fs-2 text-info"></FaGlassCheers>
            <h2>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam nesciunt, facere commodi possimus aspernatur animi itaque in molestiae a.</p>
          
        </Col>
        <Col lg={4} md={6} xm={12}>
            <h2>Quick Links</h2>
            <p>Terms And Condition</p>
            <p>Privacy Policy</p>
            <p>Return Policy</p>
            <p>Careers</p>
        </Col>
        <Col lg={4} md={6} xm={12}>
          <h2>Follow Guide</h2>
          <div className="d-flex justify-content-center gap-2">
            <input
              className="rounded-2 border-none p-2"
              type="email"
              placeholder="enter your mail"
            />
            <input
              className="rounded-2 border-none p-2"
              type="submit"
              value="subscribe"
            />
          </div>
          <div className="d-flex justify-content-center gap-2 py-2">
            <FaFacebook style={{ fontSize: "30px" }}></FaFacebook>
            <FaInstagram style={{ fontSize: "30px" }}></FaInstagram>
            <FaTwitter style={{ fontSize: "30px" }}></FaTwitter>
            <FaGoogle style={{ fontSize: "30px" }}></FaGoogle>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
