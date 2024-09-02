import React from "react"

interface politicsProps {}

const About: React.FC<politicsProps> = () => {
  return (
    <section className="About interior">
      <article className="container">
        <h1 className="h-underline">About Us</h1>
        <h3>Our Mission</h3>
        <p>
          We aim to grow customer satisfaction by offering excellent customer
          service, flexibility in resolving customer issues and needs, and
          providing quality work.
        </p>
        <br></br>
        <h3>Our Vision</h3>
        <p>
          At Chairez Detailing Services, we believe that every vehicle deserves
          to be treated with the utmost care and attention to detail. We
          envision a future where our expertise and passion for the art of
          detailing continue to elevate the industry, setting a new standard of
          automotive beauty that leaves a lasting impression on every road it
          travels.
        </p>
        <br></br>
        <h3>Meet the Founder of Chairez Detailing SE.</h3>
        <p>
          Bryan Chairez is a 2020 alumni from the University of Wisconsin -
          Whitewater. He graduated with a BBA in Marketing and a Professional
          Sales Emphasis. Bryan has had 9 years of experience in 5 different
          industries that involved meeting, selling, promoting, and educating
          different goods and or services to customers and potential clients.
        </p>
        <p>
          Having a clean car has always been important to Bryan. Even with his
          hand-me-down, he would make sure it was in top shape because, "You'll
          never know who will be in your car, or worse, when they'll need to be
          in it." Bryan refined his detailing skills when he worked for Hayes
          Family Auto, detailing cars as a Car Sales Intern whenever things got
          backed up in the shop.
        </p>
        <p>
          After a year of working for Fastenal, he realized he was missing
          something in his life. After talking with friends and family, he
          decided to take the leap into entrepreneurship and start his own
          detailing business because he truly believes that everyone should
          enjoy a nice, clean car.
        </p>
      </article>
    </section>
  )
}

export default About
