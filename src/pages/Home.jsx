import React from "react";
import SEO from "../SEO";

import heroImg from "../assets/images/heroo.jpg";
import menuImage1 from "../assets/images/heroo.jpg";
import menuImage2 from "../assets/images/main.jpg";
import menuImage3 from "../assets/images/starter.jpg";
import menuImage4 from "../assets/images/dessert.jpg";
import columnImage from "../assets/images/interior.jpg";

const homeData1 = [
  {
    id: 1,
    span: "Est. 2019 · Contemporary Dining",
    title: "Taste the Art of Exceptional Dining.",
    description:
      "Thoughtfully crafted dishes, locally inspired ingredients, and an unforgettable dining experience.",
    buttonLink1: "Explore Menu",
    buttonLink2: "Reserve a table",
  },
];

const homeData2 = [
  {
    id: 1,
    image: menuImage1,
    title: "Seared Hokkaido Scallops",
    price: "$24",
    description: "Brown butter, charred leek, wild herb oil and crisp sunchoke",
  },
  {
    id: 2,
    image: menuImage2,
    title: "Burrata & Heirloom Tomato",
    price: "$18",
    description:
      "Garden tomatoes, aged balsamic, basil oil and smoked sea salt",
  },
  {
    id: 3,
    image: menuImage3,
    title: "Dry-Aged Ribeye",
    price: "$52",
    description:
      "45-day aged beef, charred leeks, king oyster mushroom and red wine jus.",
  },
  {
    id: 4,
    image: menuImage4,
    title: "Dark Chocolate Délice",
    price: "$16",
    description:
      "70% cacao, hazelnut praline, gold leaf and crème fraîche ice cream.",
  },
];

const homeData3 = [
  {
    id: 1,
    image: columnImage,
    title: "Welcome to SAVORA",
    subtitle: "A room built around the table.",
    description:
      "SAVORA brings modern international cooking to the heart of the Riverside District. Our menu follows the seasons and the people who grow for us — familiar flavours, reimagined with care and served in a room that invites you to stay a little longer.",
    buttonDiscover: "Discover our story",
  },
];

const homeData4 = [
  {
    id: 1,
    numbering: "o1",
    icon: "bi bi-leaf",
    title: "Fresh Ingredients",
    description:
      "Sourced each morning from growers and fishermen within a hundred miles.",
  },
  {
    id: 2,
    numbering: "o2",
    icon: "bi bi-mortarboard",
    title: "Expert Chefs",
    description:
      "A brigade trained in Paris, Tokyo and Copenhagen, cooking with restraint.",
  },
  {
    id: 3,
    numbering: "o3",
    icon: "bi bi-lamp",
    title: "Exceptional Atmosphere",
    description:
      "Bronze light, velvet banquettes and a room designed for lingering.",
  },
  {
    id: 4,
    numbering: "o4",
    icon: "bi bi-stars",
    title: "Unforgettable Experience",
    description:
      "Service that anticipates, remembers and never rushes your evening.",
  },
];

const homeData5 = [
  {
    id: 1,
    icon: "bi bi-star-fill",
    description:
      "“Every course felt considered — the scallops alone are worth the trip. Service was warm without ever being intrusive.”",
    title: "Eleanor Whitfield",
    subtitle: "Food writer",
  },
  {
    id: 2,
    icon: "bi bi-star-fill",
    description:
      "“Our anniversary dinner was flawless. The room glows in the evening and the ribeye is the best in the city.”",
    title: "Marcus Adeyemi",
    subtitle: "Regular guest",
  },
  {
    id: 3,
    icon: "bi bi-star-fill",
    description:
      "“A thoughtful wine list that truly understands the food. SAVORA is quietly confident in everything it does.”",
    title: "Sofia Marchetti",
    subtitle: "Sommelier",
  },
];

function Home() {
  return (
    <>
      <SEO
        title="Fine Dining & Restaurant"
        description="Discover SAVORA, an elegant dining experience featuring thoughtfully prepared dishes, refined interiors, and warm hospitality."
      />
      <main>
        {homeData1.map((headerData1) => (
          <section
            key={headerData1.id}
            className="home-hero"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="home-hero-content">
              <h5 style={{ color: "var(--color-cream)" }}>
                {headerData1.span}
              </h5>

              <h1 className="hero-title display-1 fw-bold">
                Taste the Art of
                <br />
                <span
                  className="fst-italic"
                  style={{ color: "var(--color-gold)" }}
                >
                  Exceptional
                </span>
                <br />
                Dining.
              </h1>

              <p>{headerData1.description}</p>

              <div className="d-flex gap-3 flex-wrap">
                <a href="/menu" className="btn btn-explore text-uppercase py-3">
                  {headerData1.buttonLink1}
                </a>

                <a
                  href="/contact"
                  className="btn btn-reserve text-uppercase py-3"
                >
                  {headerData1.buttonLink2}
                </a>
              </div>
            </div>
          </section>
        ))}

        <section className="second-header-section">
          <div className="section-eyebrow text-uppercase py-2">
            <h6 style={{ color: "var(--color-gold)" }}>Signature Dishes</h6>
          </div>
          <div className="text-capitalize">
            <h1 className="display-4">From our kitchen</h1>
          </div>
          <div className="d-flex justify-content-end py-4">
            <a
              href="/menu"
              className="btn text-uppercase py-3 px-4 fs-6 btn-fullmenu"
            >
              Full menu
            </a>
          </div>
          <div className="py-3">
            <div className="row justify-content-center g-4">
              {homeData2.map((headerData2) => (
                <div className="col-12 col-md-6 col-lg-3" key={headerData2.id}>
                  <div className="card savora-dish-card h-100">
                    <div className="dish-image-container">
                      <img
                        src={headerData2.image}
                        className="card-img-top dish-image"
                        alt={headerData2.title}
                      />
                    </div>

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{headerData2.title}</h5>

                      <p className="card-text">{headerData2.description}</p>

                      <p className="card-text mt-auto">
                        <small className="text-body-secondary">
                          {headerData2.price}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="third-header-section">
          <div className="container py-3">
            {homeData3.map((headerData3) => (
              <div className="row align-items-center g-4" key={headerData3.id}>
                {/* Image column */}
                <div className="col-12 col-lg-6">
                  <div className="column-image-wrapper">
                    <img
                      src={headerData3.image}
                      alt="SAVORA restaurant dining experience"
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
                      {headerData3.title}
                    </h6>

                    <h2 className="display-4">{headerData3.subtitle}</h2>

                    <p className="py-3 text-muted">{headerData3.description}</p>

                    <a
                      href="/about"
                      className="btn py-3 btn-discover text-uppercase"
                    >
                      {headerData3.buttonDiscover}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="fourth-header-section">
          <div className="container py-3">
            <div className="text-start">
              <h6
                className="section-eyebrow text-uppercase fw-bold py-2"
                style={{ color: "var(--color-gold)" }}
              >
                Why SAVORA
              </h6>
              <h2
                className="display-4 pb-5"
                style={{ color: "var(--color-cream)" }}
              >
                The details make the evening.
              </h2>
            </div>
            <div className="row align-items-center g-4">
              {homeData4.map((headerData4) => {
                return (
                  <div
                    className="col-12 col-md-6 col-lg-3"
                    key={headerData4.id}
                  >
                    <div className="card card-backgroound">
                      <div className="card-body">
                        <span
                          className="py-3"
                          style={{
                            color: "var(--color-gold)",
                            fontSize: "14px",
                          }}
                        >
                          {headerData4.numbering}
                        </span>
                        <div className="card-text py-1">
                          <i
                            className={headerData4.icon}
                            style={{
                              color: "var(--color-gold)",
                              fontSize: "23px",
                            }}
                          ></i>
                        </div>
                        <h3
                          className="card-title py-2"
                          style={{ color: "var(--color-cream)" }}
                        >
                          {headerData4.title}
                        </h3>
                        <p
                          className="card-text py-2"
                          style={{
                            color: "var(--color-light-muted)",
                            fontSize: "14px",
                          }}
                        >
                          {headerData4.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="fifth-header-section">
          <div className="container py-3">
            <div className="text-center">
              <h6
                className="text-uppercase text-center fw-bolder py-2"
                style={{ color: "var(--color-gold)", letterSpacing: "3px" }}
              >
                Guest Notes
              </h6>
              <h2
                className="display-4 pb-5"
                style={{ color: "var(--color-charcoal)" }}
              >
                Kind words from our tables.
              </h2>
            </div>
            <div className="row align-items-center g-4">
              {homeData5.map((headerData5) => {
                return (
                  <div
                    className="col-12 col-md-6 col-lg-4"
                    key={headerData5.id}
                  >
                    <div className="card card-backgroound-fifth">
                      <div className="card-body">
                        <div className="card-text py-1">
                          <i
                            className={headerData5.icon}
                            style={{
                              color: "var(--color-gold)",
                              fontSize: "20px",
                            }}
                          ></i>
                          <i
                            className={headerData5.icon}
                            style={{
                              color: "var(--color-gold)",
                              fontSize: "20px",
                            }}
                          ></i>
                          <i
                            className={headerData5.icon}
                            style={{
                              color: "var(--color-gold)",
                              fontSize: "20px",
                            }}
                          ></i>
                          <i
                            className={headerData5.icon}
                            style={{
                              color: "var(--color-gold)",
                              fontSize: "20px",
                            }}
                          ></i>
                          <i
                            className={headerData5.icon}
                            style={{
                              color: "var(--color-gold)",
                              fontSize: "20px",
                            }}
                          ></i>
                        </div>
                        <p
                          className="card-text py-2 fst-italic"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {headerData5.description}
                        </p>
                        <h5
                          className="card-title"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {headerData5.title}
                        </h5>
                        <h6
                          className="card-title"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {headerData5.subtitle}
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          className="sixth-header-section"
          style={{ backgroundImage: `url(${columnImage})` }}
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
                className="btn py-3 text-uppercase btn-reservation-sixth"
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

export default Home;
