import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="venue section-padding" id="section_6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="mb-5">
                Our <u className="text-info">Campus Location</u>
              </h2>
            </div>
            <div className="col-lg-6 col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.9816911171933!2d73.89686257429071!3d18.664817564753996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c76405e6f861%3A0x494dec67d252d9b7!2sAPEX%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2sin!4v1741069730023!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="venue-thumb bg-white shadow-lg">
                <div className="venue-info-title">
                  <h2 className="text-white mb-0">Apex School</h2>
                </div>
                <div className="venue-info-body">
                  <h4 className="d-flex">
                    <i className="bi-geo-alt me-2"></i>
                    <span>
                      Sr No 501/3, Near Prism City, Behind Tanish Orchid Phase
                      II Charholi BK 412105.
                    </span>
                  </h4>
                  <h5 className="mt-4 mb-3">
                    <a href="mailto:apexinternationalschool22@gmail.com">
                      <i className="bi-envelope me-2"></i>
                      apexinternationalschool22@gmail.com
                    </a>
                  </h5>
                  <h5 className="mb-0">
                    <a href="tel:+918625837474">
                      <i className="bi-telephone me-2"></i>
                      8625837474, 9763200020
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section-padding" id="section_7">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <form
                className="custom-form contact-form bg-white shadow-lg"
                action="#"
                method="post"
                role="form"
              >
                <h2>Contact Us for More Information</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows={5}
                      id="message"
                      name="message"
                      placeholder="Your Message or Query"
                    ></textarea>

                    <button type="submit" className="form-control">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ backgroundColor: "#fff" }}>
      <div className="container p-4">
        <div className="row">
          {/* Footer Content */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: "2px", color: "#818963" }}>
            Apex International School
            </h5>
            <p>
              Apex International School is committed to providing quality education with a holistic approach. 
              Our curriculum nurtures students intellectual and personal growth, empowering them to excel in life.
            </p>
          </div>

          {/* Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: "2px", color: "#818963" }}>Quick Links</h5>
            <ul className="list-unstyled mb-0">
              
            
              <li className="mb-1">
                <a href="" style={{ color: "#4f4f4f" }}>Admissions</a>
              </li>
              <li className="mb-1">
                <a href="" style={{ color: "#4f4f4f" }}>Facilities</a>
              </li>
              <li>
                <a href="" style={{ color: "#4f4f4f" }}>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-1" style={{ letterSpacing: "2px", color: "#818963" }}>School Hours</h5>
            <table className="table" style={{ color: "#4f4f4f", borderColor: "#666" }}>
              <tbody>
                <tr>
                  <td>Mon - Fri:</td>
                  <td>8:00 AM - 3:00 PM</td>
                </tr>
                <tr>
                  <td>Sat:</td>
                  <td>8:00 AM - 12:00 PM</td>
                </tr>
                <tr>
                  <td>Sun:</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
  © {new Date().getFullYear()} Apex International School | All Rights Reserved
  <br />
  Designed by <a href="https://www.sunrayztechnology.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#000" }}>SunRayz Technology</a>
</div>

    </footer>
    </div>
  );
};

export default Footer;
