import React from "react"
import { BiCopyright } from "react-icons/bi"
import { FaFacebookSquare } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="Footer container">
      <div className="top-footer">
        <img
          src="/logo-w.webp"
          alt=""
          // width={200}
          // height={120}
          className="logo"
        ></img>
        <div className="block">
          <h5>Contact</h5>
          <p>
            <b>Phone: </b>
            <a href="tel:9203421282">(920)342-1282</a>
          </p>
          <p>
            <b>Email: </b>
            <a href="mailto:Chairezdetailservices@gmail.com">
              Chairezdetailservices@gmail.com
            </a>
          </p>
        </div>
        <div className="block">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/ChairezDetailing/">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <GrInstagram />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">
        <BiCopyright /> 2023 Chairez Detailing Services. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
