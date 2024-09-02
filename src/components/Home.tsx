import React from "react"
import { MdCleaningServices } from "react-icons/md"
import { BsRulers } from "react-icons/bs"
import { GiEyeTarget } from "react-icons/gi"
import detailMin from "../../public/detail-min.webp"
import Hero from "./Hero"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="Home">
      <Hero />
      <section className="home-intro">
        <div className="layout">
          <div className="left-block">
            <h2 className="underline">Our Drive</h2>
            <p>
              Discover automotive perfection at Chairez Detailing Services, your
              destination for impeccable detailing. Ignite a new level of
              admiration for your vehicle with our exceptional detailing
              services. Our dedicated team of experts goes above and beyond to
              ensure every inch of your car receives meticulous attention. From
              flawlessly restored exteriors that glisten in the sunlight to
              immaculate interiors that exude freshness, we deliver a
              transformative experience that exceeds expectations. Discover a
              realm where precision, passion, and perfection converge. Trust us
              to unveil the true potential of your vehicle, elevating it to
              unparalleled heights of beauty. Welcome to Chairez Detailing
              Services, where automotive detailing takes center stage.
            </p>
          </div>
          <div className="right-block">
            <img src={detailMin} alt="detailing" />
          </div>
        </div>
      </section>
      <section className="home-services">
        <h2 className="h-underline">Our Expert Detailing Services</h2>
        <div className="services-grid">
          <div className="box">
            <BsRulers className="icon" />
            <h4>Precission Cleaning</h4>
            <p className="description">
              Our detailing experts employ meticulous techniques and advanced
              tools to achieve a spotless and flawless clean for your vehicle,
              leaving no dirt, grime, or smudges behind.
            </p>
          </div>
          <div className="box">
            <MdCleaningServices className="icon" />
            <h4>Interior Revitalization</h4>
            <p className="description">
              Indulge in the ultimate interior transformation. Our detailing
              professionals go beyond the surface, meticulously cleaning,
              conditioning, and rejuvenating every inch of your car's interior,
              leaving it fresh, luxurious, and comfortable.
            </p>
          </div>
          <div className="box">
            <GiEyeTarget className="icon" />
            <h4>Attention to Detail</h4>
            <p className="description">
              We take pride in our unwavering commitment to detail. From
              meticulously cleaning intricate components to ensuring flawless
              finishes, our team's meticulous approach guarantees a level of
              quality that exceeds expectations.
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
