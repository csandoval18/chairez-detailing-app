import React from "react"

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="Hero">
      <video
        src="./hero.mp4"
        autoPlay
        loop
        muted
        controlsList="nodownload"
        disablePictureInPicture
      ></video>
      <div className="overlay">
        <h1>CHAIREZ DETAILING SERVICES</h1>
        <p>Let's Lessen Your Work, After Work</p>
        <a className="btn btn-primary" href="/contact">
          Contact Us
        </a>
      </div>
    </section>
  )
}

export default Hero
