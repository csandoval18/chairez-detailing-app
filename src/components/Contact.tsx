import React, { useEffect, useState } from "react"
import emailjs from "emailjs-com"
import ClipLoader from "react-spinners/ClipLoader"
import { IoIosSend } from "react-icons/io"

interface pageProps {}

const page: React.FC<pageProps> = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
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
      name: name,
      email: email,
      message: message,
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (res) => {
        console.log("EMAIL SENT SUCCESSFULLY!", res.status, res.text)
        setStatus("SUCCESS")
        setName("")
        setEmail("")
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
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              <>
                Send
                <IoIosSend />
              </>
            )}
          </button>
          {status === "SUCCESS" && (
            <p className="success">Message sent successfully!</p>
          )}
          {status === "FAILED" && (
            <p className="error">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default page
