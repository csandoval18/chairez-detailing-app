import React from "react"

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <section className="Locations interior">
      <div className="container">
        <div className="center-headings">
          <h1 className="h-underline">Locations</h1>
          <h2>Drop By to Wash Your Worries Away</h2>
        </div>

        <div className="info-wrapper">
          <div className="block">
            <h4>Our Address</h4>
            <p>Whitewater, Wisconsin</p>
            <p>Watertown, Wisconsin</p>
          </div>
          <div className="block">
            <h4>Contact Us</h4>
            <p>
              <a href="mailto:Chairezdetailservices@gmail.com">
                Chairezdetailservices@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:9203421282">Tel: 920-342-1282</a>
            </p>
          </div>
          <div className="block">
            <h4>Opening Hours</h4>
            <p>Mon - Fri: 9am - 5pm</p>
            <p>​​Saturday: 9am - 1pm</p>
            <p>​Sunday: Closed</p>
          </div>
        </div>
        <div className="locations-wrapper">
          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="cover whitewater"></div>
              </div>
            </div>

            <div className="slide slide2">
              <div className="content">
                <h3>Whitewater, WI</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="cover watertown"></div>
              </div>
            </div>

            <div className="slide slide2">
              <div className="content">
                <h3>Watertown, WI</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
