import { Fragment} from 'react';
import emailjs from '@emailjs/browser'
import "./contact.css";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault()
   const data={
    name:e.target.name.value,
    FormEmail:e.target.FormEmail.value,
    message:e.target.message.value
   }
   console.log(data)
   emailjs.send("service_bb5c1a5","template_qor5o6r",data,"RBlIR4GeG2DKDllfP")
  };
  return (
    <Fragment>
 
    <div className="cotact-part">
      <div className="contact-section">
      <h1 className='contact-h1'>Get in Touch</h1>
      <p className='details-info'>
      Email: aen_2012@live.com <br/>
      Mobile: +201019627390
      </p>
      <div className="contact-links">
          <div class="social-icons">
            <i
              class="fab fa-github"
              onClick={() => {
                window.open("https://github.com/Abdelrhman-Nabil", "_blank");
              }}
            ></i>
            <i
              class="fab fa-linkedin"
              onClick={() => {
                window.open(
                  " https://www.linkedin.com/in/abdelrahman-nabil-547969304",
                  "_blank"
                );
              }}
            ></i>
            <i
              class="fab fa-whatsapp"
              
              onClick={() => {
                window.open("https://wa.me/+201019627390", "_blank");
              }}
            ></i>
            </div>
        </div>
        <div className="sendEmail-part">
          <form className="sendEmail-form" onSubmit={sendEmail}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
          />
          <label htmlFor="email-form">Your Email</label>
            <input
              type="text"
              name="FormEmail"
              placeholder="person@example.com"
            />
            <label htmlFor="message">Message</label>
            <textarea name="message"/>
            <button type='submit'  className="send-email-button">
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
    </Fragment>
  );
};
export default Contact;
/*    // emailjs.send("service_bb5c1a5","template_qor5o6r",e.target,"RBlIR4GeG2DKDllfP")
*/