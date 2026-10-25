import React from "react";
import SEO from "../SEO";

import backImageTop from "../assets/images/interior.jpg";
import backImageBottom from "../assets/images/interior.jpg";
import imageKitchen from "../assets/images/kitchen.jpg";
import cheffImage from "../assets/images/cheff.jpg";

const aboutData1 = [
  {
    id: 1,
    image: imageKitchen,
    title: "Born from a long table and a small garden.",
    description:
      "SAVORA began as a supper club in a converted riverside warehouse — twelve seats, one menu and a garden out back. Word spread. Today the room holds sixty, but the idea is unchanged: cook honestly with what the region gives us, and treat every guest as if they were at our own table.",
  },
];

const aboutData2 = [
  {
    id: 1,
    numbering: "o1",
    title: "Quality Ingredients",
    description:
      "We buy whole animals, day-boat fish and produce picked that week.",
  },
  {
    id: 2,
    numbering: "o2",
    title: "Creativity",
    description:
      "Global technique applied with local restraint; nothing on the plate without purpose.",
  },
  {
    id: 3,
    numbering: "o3",
    title: "Hospitality",
    description:
      "We remember names, preferences and the occasion that brought you here.",
  },
  {
    id: 4,
    numbering: "o4",
    title: "Memorable Experiences",
    description: "An evening at SAVORA should be one you retell long after.",
  },
];
const aboutData3 = [
  {
    id: 1,
    image: cheffImage,
    title: "Our Chef",
    subtitle: "Julien Arceneaux",
    span: "Executive Chef & Co-Founder",
    description:
      "Julien trained under Michelin-starred chefs in Lyon and Kyoto before returning home to open SAVORA. His cooking is precise but warm — French in its discipline, Japanese in its respect for ingredients, and wholly local in spirit.",
    quote:
      "“The best dishes taste like a place and a moment. My job is to get out of their way.”",
  },
];

const aboutData4 = [
  {
    id: 1,
    numbering: "o1",
    title: "Seasonality",
    description: "Our menu changes with the harvest, never with trends.",
  },
  {
    id: 2,
    numbering: "o2",
    title: "Craft",
    description:
      "Bread, butter, ferments and pastries are all made in-house daily.",
  },
  {
    id: 3,
    numbering: "o3",
    title: "Community",
    description: "Twelve partner farms and a fair-wage kitchen we're proud of.",
  },
  {
    id: 4,
    numbering: "o4",
    title: "Sustainability",
    description: "Zero single-use plastics and whole-ingredient cooking.",
  },
];

function About() {
  return (
    <>
      <SEO
        title="About Us | SAVORA"
        description="Discover the story, philosophy, and passion behind SAVORA's approach to dining and hospitality."
      />
      <main>
        <section
          className="about-section-first"
          style={{ backgroundImage: `url(${backImageTop})` }}
        >
          <div className="about-content">
            <h5
              className="text-uppercase fw-bold section-eyebrow"
              style={{ color: "var(--color-gold)" }}
            >
              About SAVORA
            </h5>
            <h1 className="about-title display-1 py-3">Our Story</h1>
          </div>
        </section>
        <section about-section-second>
          <div className="container py-4">
            <div className="section-eyebrow text-uppercase pt-4">
              <h6 style={{ color: "var(--color-gold)" }}>Since 2019</h6>
            </div>
            {aboutData1.map((dataItem1) => (
              <div className="row align-items-center g-4" key={dataItem1.id}>
                {/* Text column */}
                <div className="col-12 col-lg-6">
                  <div className="text-start px-2">
                    <h1
                      className="text-capitalize display-5"
                      style={{ color: "var(--color-charcoal)" }}
                    >
                      {dataItem1.title}
                    </h1>

                    <p className="pt-3">{dataItem1.description}</p>
                  </div>
                </div>

                {/* Image column */}
                <div className="col-12 col-lg-6">
                  <div className="column-image-wrapper-about">
                    <img
                      src={dataItem1.image}
                      alt="kitchen"
                      className="img-fluid rounded image-column rounded-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="about-section-third">
          <div className="container py-3">
            <div className="text-start">
              <h6
                className="section-eyebrow text-uppercase fw-bold py-2"
                style={{ color: "var(--color-gold)" }}
              >
                Our Philosophy
              </h6>
              <h2
                className="display-4 pb-5"
                style={{ color: "var(--color-cream)" }}
              >
                Four things we never compromise.
              </h2>
            </div>
            <div className="row align-items-center g-4">
              {aboutData2.map((dataItem2) => {
                return (
                  <div className="col-12 col-md-6 col-lg-3" key={dataItem2.id}>
                    <div className="card card-background-about">
                      <div className="card-body">
                        <span
                          className="py-2"
                          style={{
                            color: "var(--color-gold)",
                            fontSize: "14px",
                          }}
                        >
                          {dataItem2.numbering}
                        </span>
                        <h3
                          className="card-title py-2"
                          style={{ color: "var(--color-cream)" }}
                        >
                          {dataItem2.title}
                        </h3>
                        <p
                          className="card-text py-2"
                          style={{
                            color: "var(--color-light-muted)",
                            fontSize: "14px",
                          }}
                        >
                          {dataItem2.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="about-section-fourth">
          <div className="container py-3">
            {aboutData3.map((dataItem3) => (
              <div className="row align-items-center g-4" key={dataItem3.id}>
                {/* Image column */}
                <div className="col-12 col-lg-6">
                  <div className="column-image-wrapper-cheff">
                    <img
                      src={dataItem3.image}
                      alt="our chef"
                      className="img-fluid rounded image-column rounded-0"
                    />
                  </div>
                </div>

                {/* Text column */}
                <div className="col-12 col-lg-6">
                  <div className="text-start px-4">
                    <h6
                      className="section-eyebrow text-uppercase fw-bold"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {dataItem3.title}
                    </h6>

                    <h2 className="display-4">{dataItem3.subtitle}</h2>

                    <h4 className="pt-2 text-muted fs-3 fst-italic">
                      {dataItem3.span}
                    </h4>

                    <p className="py-3 text-muted">{dataItem3.description}</p>
                    <p className="pt-1 text-muted">{dataItem3.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="about-section-fifth">
          <div className="container py-3">
            <div className="text-center">
              <h6
                className="text-uppercase text-center fw-bolder py-2"
                style={{ color: "var(--color-gold)", letterSpacing: "3px" }}
              >
                Restaurant Values
              </h6>
              <h2
                className="display-4 pb-5"
                style={{ color: "var(--color-charcoal)" }}
              >
                What we stand for.
              </h2>
            </div>
            <div className="row align-items-center g-4">
              {aboutData4.map((dataItem4) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={dataItem4.id}>
                    <div className="card card-background-values">
                      <div className="card-body">
                        <span
                          className="py-2"
                          style={{
                            color: "var(--color-gold)",
                            fontSize: "14px",
                          }}
                        >
                          {dataItem4.numbering}
                        </span>
                        <h3
                          className="card-title py-2"
                          style={{ color: "var(--color-charcoal)" }}
                        >
                          {dataItem4.title}
                        </h3>
                        <p
                          className="card-text py-2"
                          style={{
                            color: "var(--color-light-muted)",
                            fontSize: "16px",
                          }}
                        >
                          {dataItem4.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          className="about-section-sixth"
          style={{ backgroundImage: `url(${backImageBottom})` }}
        >
          <div className="container py-3">
            <div className="text-center">
              <h6
                className="text-uppercase text-center fw-bolder py-2"
                style={{ color: "var(--color-gold)", letterSpacing: "3px" }}
              >
                Reservations
              </h6>
              <h2
                className="display-1 pb-5"
                style={{ color: "var(--color-cream)" }}
              >
                Your Table Awaits.
              </h2>
              <a
                href="/contact"
                className="btn py-3 text-uppercase btn-reservation-about"
              >
                Make a reservation
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
