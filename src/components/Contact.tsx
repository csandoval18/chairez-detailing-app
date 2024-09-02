import React from "react"

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <section className="Contact interior">
      <div className="container">
        <h1 className="h-underline">Contact Us</h1>
        <form action="post">
          <div className="block">
            <label htmlFor="firstname">FIRST NAME</label>
            <input type="text" name="firtname" id="firstname" />
            <label htmlFor="lastname">LAST NAME</label>
            <input type="text" name="lastname" id="lastname" />
          </div>

          <div className="block">
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="phone">PHONE</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div className="block textarea-wrapper">
            <label htmlFor="message">MESSAGE</label>
            <textarea name="message" id="message" rows={10} />
          </div>
          <button type="submit" className="btn btn-primary">
            SEND
          </button>
        </form>
      </div>
    </section>
  )
}

export default page
