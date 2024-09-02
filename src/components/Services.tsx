import React from "react"

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <section className="Services interior">
      <div className="container">
        <h1 className="h-underline">Services & Pricing</h1>
        <div className="cards-wrapper">
          <div className="card">
            <h4>Basic Interior</h4>
            <span>$100-$200</span>
            <ul className="details">
              <li>Remove All Garbage</li>
              <li>Vacuum Seats and Carpets</li>
              <li>Clean and Degrease All Surfaces</li>
              <li>Clean and Shine Interior</li>
              <li>Windows</li>
              <li>Clean Door Jambs</li>
            </ul>
            <ul className="notice">
              <li>Price Varies Depending on Workload</li>
              <li>
                Price Reductions for Students, First Responder, and Military
                Personnel
              </li>
            </ul>
          </div>
          <div className="card">
            <h4>Advanced Interior</h4>
            <span>$200-$300</span>
            <ul className="details">
              <li>Remove All Garbage</li>
              <li>Vacuum Seats and Carpets</li>
              <li>Clean and Degrease All Surfaces</li>
              <li>Clean and Shine Interior Windows</li>
              <li>Clean Door Jambs</li>
              <li>Shampoo Carpets and Seats</li>
              <li>Dash Protectant</li>
            </ul>
            <ul className="notice">
              <li>Price Varies Depending on Workload</li>
              <li>
                Price Reductions for Students, First Responder, and Military
                Personnel
              </li>
            </ul>
          </div>
          <div className="card">
            <h4>Exterior</h4>
            <span>Basic: $30</span>
            <ul className="details">
              <li>Hand Wash and Dry</li>
              <li>Rims and Tire Clean</li>
              <li>Sealant</li>
            </ul>
            <ul className="notice">
              <li>Price Varies Depending on Workload</li>
              <li>
                Price Reductions for Students, First Responder, and Military
                Personnel
              </li>
            </ul>
            <span>Advanced: $70</span>
            <ul className="details">
              <li>Hand Wash and Dry</li>
              <li>Rims and Tire Clean</li>
              <li>Wheel Well Clean</li>
              <li>Sealant</li>
              <li>Headlight Restoration</li>
              <li>Bug and Tree Sap Removal</li>
            </ul>
            <ul className="notice">
              <li>Price Varies Depending on Workload</li>
              <li>
                Price Reductions for Students, First Responder, and Military
                Personnel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
