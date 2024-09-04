import emailjs from "emailjs-com"
import React, { useEffect, useState } from "react"
import { IoIosSend } from "react-icons/io"
import ClipLoader from "react-spinners/ClipLoader"

interface pageProps {}

const page: React.FC<pageProps> = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const initializeEmailJS = () => {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      emailjs.init(publicKey)
    }
    
    initializeEmailJS()
    return () => {}
  }, [])
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (res) => {
        console.log("EMAIL SENT SUCCESSFULLY!", res.status, res.text)
        setStatus("SUCCESS")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setMessage("")
        setLoading(false)
      },
      (err) => {
        console.log("FAILED...", err)
        setStatus("FAILED")
        setLoading(false)
      }
    )
  }

  return (
    <section className="Contact interior">
      <div className="container">
        <h1 className="h-underline">Contact Us</h1>
        <form action="post" onSubmit={handleSubmit}>
          <div className="block">
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              type="text"
              name="firtName"
              id="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName">LAST NAME</label>
            <input
              type="text"
              name="lastName"
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="block">
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone">PHONE</label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="block textarea-wrapper">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              name="message"
              id="message"
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="send-wrapper">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : (
                <>
                  Send
                  <IoIosSend className="icon" />
                </>
              )}
            </button>
            {status === "SUCCESS" && (
              <p className="success">Message sent successfully!</p>
            )}
            {status === "FAILED" && (
              <p className="error">Failed to send message. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default page
