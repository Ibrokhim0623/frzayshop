import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="content" >
          <h2 data-aos="fade-up">Contact Us</h2>
          <p data-aos="fade-up" data-aos-delay="600">
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. <br /> Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48831.74381065839!2d65.33659394027022!3d40.098069933969605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNavoiy%2C%20Vasxod!5e0!3m2!1sru!2s!4v1668797887923!5m2!1sru!2s"></iframe>
        </div>
        <form>
            <div className="form-name">
                <div className="name-section" data-aos="fade-down" data-aos-delay="500">
                    <label>Name</label>
                    <input type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="name-section" data-aos="fade-down" data-aos-delay="500">
                    <label>Email</label>
                    <input type="text" placeholder="Enter Your Email" required />
                </div>
            </div>
            <div className="name-section" data-aos="fade-down" data-aos-delay="500">
                <label>Subject</label>
                <input type="text" placeholder="Subject" required />
            </div>
            <div className="name-section" data-aos="fade-down" data-aos-delay="500">
                <label>Message</label>
                <textarea placeholder="Message" required></textarea>
            </div>
            <div className="btn" data-aos="fade-down" data-aos-delay="500">
                <button type="submit">Let's Talk</button>
            </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
