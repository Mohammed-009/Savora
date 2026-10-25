import React from "react";
import SEO from "../SEO";
import backImageTop from "../assets/images/interior.jpg";

const contactData = [
  {
    id: 1,
    title1: "Address",
    description1: "214 Linden Avenue, Riverside District",
    title2: "Phone",
    description2: "+1 (555) 014-2290",
    title3: "Email",
    description3: "reservations@savora.com",
    title4: "Opening Hours",
    subtitle1: "Tue – Thu",
    subtitle2: "Fri – Sat",
    subtitle3: "Sunday",
    subtitle4: "Monday",
    subtitle5: "5pm – 10pm",
    subtitle6: "5pm – 11pm",
    subtitle7: "12pm – 9pm",
    subtitle8: "Closed",
  },
];

function Contact() {
  return (
    <>
      <SEO
        title="Contact & Reservations | SAVORA"
        description="Contact SAVORA for restaurant enquiries, reservation information, and dining arrangements."
      />
      <main>
        <section
          className="contact-section-first"
          style={{ backgroundImage: `url(${backImageTop})` }}
        >
          <div className="contact-content">
            <h5
              className="text-uppercase fw-bolder section-eyebrow"
              style={{ color: "var(--color-gold)" }}
            >
              Reservations
            </h5>
            <h1 className="contact-title display-1 py-3">Visit SAVORA</h1>
          </div>
        </section>

        <section className="contact-section-second">
          <div className="container py-1">
            <div className="row g-4">
              {contactData.map((contactItem) => (
                <div className="col-12 col-lg-4" key={contactItem.id}>
                  <div className="section-eyebrow text-uppercase pt-4">
                    <h6 style={{ color: "var(--color-gold)" }}>CONTACT</h6>
                  </div>
                  <div className="text-capitalize pb-3">
                    <h1 className="display-4">Find us.</h1>
                  </div>
                  <div>
                    <h6 className="fs-5" style={{ color: "var(--color-gold)" }}>
                      {contactItem.title1}
                    </h6>
                    <p>{contactItem.description1}</p>
                  </div>
                  <div>
                    <h6 className="fs-5" style={{ color: "var(--color-gold)" }}>
                      {contactItem.title2}
                    </h6>
                    <p>{contactItem.description2}</p>
                  </div>
                  <div>
                    <h6 className="fs-5" style={{ color: "var(--color-gold)" }}>
                      {contactItem.title3}
                    </h6>
                    <p>{contactItem.description3}</p>
                  </div>
                  <div>
                    <h6 className="fs-5" style={{ color: "var(--color-gold)" }}>
                      {contactItem.title4}
                    </h6>
                    <div>
                      <span>{contactItem.subtitle1}</span>:
                      <span className="px-4">{contactItem.subtitle5}</span>
                    </div>
                    <div>
                      <span>{contactItem.subtitle1}</span>:
                      <span className="px-4">{contactItem.subtitle5}</span>
                    </div>
                    <div>
                      <span>{contactItem.subtitle2}</span>:
                      <span className="px-4">{contactItem.subtitle6}</span>
                    </div>
                    <div>
                      <span>{contactItem.subtitle3}</span>:
                      <span className="px-4">{contactItem.subtitle7}</span>
                    </div>
                    <div>
                      <span>{contactItem.subtitle4}</span>:
                      <span className="px-4">{contactItem.subtitle8}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12 col-lg-8">
                <div
                  className="card px-5 rounded-0"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div className="card-body">
                    <div className="card-title pb-2">
                      <h1 className="display-4">Reserve a table</h1>
                    </div>
                    <div className="card-text pb-3">
                      For parties larger than 8, please call us directly.
                    </div>
                    <form action="">
                      <div className="row justify-content-center pb-4">
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="FullName"
                              className="text-uppercase label-form"
                            >
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="fullname"
                              className="form-control input-form"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="email"
                              className="text-uppercase label-form"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control input-form"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center pb-4">
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="phone"
                              className="text-uppercase label-form"
                            >
                              Phone *
                            </label>
                            <input
                              type="text"
                              name="phone"
                              className="form-control input-form"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="guests"
                              className="text-uppercase label-form"
                            >
                              Number of Guests *
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-select input-form"
                            >
                              <option value="">--select--</option>
                              <option value="1 guests">1 guest</option>
                              <option value="2 guests">2 guests</option>
                              <option value="3 guests">3 guests</option>
                              <option value="4 guests">4 guests</option>
                              <option value="5 guests">5 guests</option>
                              <option value="6 guests">6 guests</option>
                              <option value="7 guests">7 guests</option>
                              <option value="8 guests">8 guests</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center pb-4">
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="date"
                              className="text-uppercase label-form"
                            >
                              Date *
                            </label>
                            <input
                              type="date"
                              name="date"
                              className="form-control input-form"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="time"
                              className="text-uppercase label-form"
                            >
                              Time *
                            </label>
                            <input
                              type="time"
                              name="time"
                              className="form-control input-form"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group py-3">
                        <label
                          htmlFor="specialRequests"
                          className="text-uppercase label-form"
                        >
                          Special requests
                        </label>
                        <textarea
                          name="specialRequests"
                          id="specialRequests"
                          cols="30"
                          rows="5"
                          placeholder="Allergies, Celebrations, seating preferences..."
                          className="form-control input-form"
                        ></textarea>
                      </div>
                      <div className="form-group pt-3 pb-3">
                        <button
                          type="submit"
                          className="btn text-uppercase py-3 px-3 btn-request-reservation"
                          style={{ letterSpacing: "3px" }}
                        >
                          Request Reservation
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
