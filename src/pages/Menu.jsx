import React from "react";
import SEO from "../SEO";

import backImageTop from "../assets/images/main.jpg";
import menuImage1 from "../assets/images/main.jpg";
import menuImage2 from "../assets/images/dessert.jpg";
import menuImage3 from "../assets/images/starter.jpg";
import backImageBottom from "../assets/images/interior.jpg";

const menuData1 = [
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
];

const menuData2 = [
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
];

const menuData3 = [
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
];

const menuData4 = [
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
];

function Menu() {
  const allMenuItems = [...menuData1, ...menuData2, ...menuData3, ...menuData4];
  return (
    <>
      <SEO
        title="Our Menu | SAVORA"
        description="Explore the SAVORA menu, featuring carefully prepared starters, main courses, desserts, and drinks."
      />
      <main>
        <section
          className="menu-section-first"
          style={{ backgroundImage: `url(${backImageTop})` }}
        >
          {/* <div classNameName="container py-5"></div> */}
          <div className="menu-content">
            <h5
              className="text-uppercase fw-bold section-eyebrow"
              style={{ color: "var(--color-gold)" }}
            >
              Seasonal · Autumn 2026{" "}
            </h5>
            <h1 className="menu-title display-1 py-3">The Menu</h1>
          </div>
        </section>

        <section className="menu-section-second">
          <div className="container py-5">
            <div className="row">
              <ul
                className="nav nav-tabs justify-content-center g-2 py-1"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="py-2 px-4 btn btn-tabs-menu btn-sm me-2 me-md-4"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="py-2 px-4  btn btn-tabs-menu btn-sm me-2 me-md-4"
                    id="starters-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#starters-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="starters-tab-pane"
                    aria-selected="false"
                  >
                    Starters
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="py-2 px-4  btn btn-tabs-menu btn-sm me-2 me-md-4"
                    id="mainCourses-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#mainCourses-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="mainCourses-tab-pane"
                    aria-selected="false"
                  >
                    Main Courses
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="py-2 px-4  btn btn-tabs-menu btn-sm me-2 me-md-4"
                    id="desserts-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#desserts-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="desserts-tab-pane"
                    aria-selected="false"
                  >
                    Desserts
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="py-2 px-4  btn btn-tabs-menu btn-sm me-2 me-md-4"
                    id="drinks-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#drinks-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="drinks-tab-pane"
                    aria-selected="false"
                  >
                    Drinks
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {/* <!-- All foods --> */}

                {/* All foods */}
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  <div className="row mt-4 g-3">
                    {allMenuItems.map((menuItem0) => (
                      <div
                        className="col-12 col-md-6 col-lg-4"
                        key={menuItem0.id}
                      >
                        <div className="card savora-dish-card h-100">
                          <div className="dish-image-container">
                            <img
                              src={menuItem0.image}
                              className="card-img-top dish-image rounded-0"
                              alt={menuItem0.title}
                            />
                          </div>

                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{menuItem0.title}</h5>

                            <p className="card-text">{menuItem0.description}</p>

                            <p className="card-text mt-auto">
                              <small className="text-body-secondary">
                                ${menuItem0.price}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <!-- Starters --> */}
                <div
                  className="tab-pane fade"
                  id="starters-tab-pane"
                  role="tabpanel"
                  aria-labelledby="starters-tab"
                  tabindex="0"
                >
                  <div className="row mt-4 g-3">
                    {menuData1.map((menuItem1) => (
                      <div
                        className="col-12 col-md-6 col-lg-4"
                        key={menuItem1.id}
                      >
                        <div className="card savora-dish-card h-100">
                          <div className="dish-image-container">
                            <img
                              src={menuItem1.image}
                              className="card-img-top dish-image"
                              alt={menuItem1.title}
                            />
                          </div>

                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{menuItem1.title}</h5>

                            <p className="card-text">{menuItem1.description}</p>

                            <p className="card-text mt-auto">
                              <small className="text-body-secondary">
                                ${menuItem1.price}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* </div> */}

                {/* <!-- Main Courses --> */}
                <div
                  className="tab-pane fade"
                  id="mainCourses-tab-pane"
                  role="tabpanel"
                  aria-labelledby="mainCourses-tab"
                  tabindex="0"
                >
                  <div className="row mt-4 g-3">
                    {menuData2.map((menuItem2) => (
                      <div
                        className="col-12 col-md-6 col-lg-4"
                        key={menuItem2.id}
                      >
                        <div className="card savora-dish-card h-100">
                          <div className="dish-image-container">
                            <img
                              src={menuItem2.image}
                              className="card-img-top dish-image"
                              alt={menuItem2.title}
                            />
                          </div>

                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{menuItem2.title}</h5>

                            <p className="card-text">{menuItem2.description}</p>

                            <p className="card-text mt-auto">
                              <small className="text-body-secondary">
                                ${menuItem2.price}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* </div> */}

                {/* <!-- Deserts --> */}
                <div
                  className="tab-pane fade"
                  id="desserts-tab-pane"
                  role="tabpanel"
                  aria-labelledby="desserts-tab"
                  tabindex="0"
                >
                  <div className="row mt-4 g-3">
                    {menuData3.map((menuItem3) => (
                      <div
                        className="col-12 col-md-6 col-lg-4"
                        key={menuItem3.id}
                      >
                        <div className="card savora-dish-card h-100">
                          <div className="dish-image-container">
                            <img
                              src={menuItem3.image}
                              className="card-img-top dish-image"
                              alt={menuItem3.title}
                            />
                          </div>

                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{menuItem3.title}</h5>

                            <p className="card-text">{menuItem3.description}</p>

                            <p className="card-text mt-auto">
                              <small className="text-body-secondary">
                                ${menuItem3.price}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <!-- Drinks --> */}
                <div
                  className="tab-pane fade"
                  id="drinks-tab-pane"
                  role="tabpanel"
                  aria-labelledby="drinks-tab"
                  tabindex="0"
                >
                  <div className="row mt-4 g-3">
                    {menuData4.map((menuItem4) => (
                      <div
                        className="col-12 col-md-6 col-lg-4"
                        key={menuItem4.id}
                      >
                        <div className="card savora-dish-card h-100">
                          <div className="dish-image-container">
                            <img
                              src={menuItem4.image}
                              className="card-img-top dish-image"
                              alt={menuItem4.title}
                            />
                          </div>

                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{menuItem4.title}</h5>

                            <p className="card-text">{menuItem4.description}</p>

                            <p className="card-text mt-auto">
                              <small className="text-body-secondary">
                                ${menuItem4.price}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="menu-section-third"
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
                Hungry yet?
              </h2>
              <a
                href="/contact"
                className="btn py-3 text-uppercase btn-reservation-menu"
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

export default Menu;
