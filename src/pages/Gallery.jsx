import React from "react";
import SEO from "../SEO";

import backImageTop from "../assets/images/kitchen.jpg";
import galleryImg1 from "../assets/images/interior.jpg";
import galleryImg2 from "../assets/images/heroo.jpg";
import galleryImg3 from "../assets/images/kitchen.jpg";
import galleryImg4 from "../assets/images/starter.jpg";
import galleryImg5 from "../assets/images/cheff.jpg";
import galleryImg6 from "../assets/images/drink.jpg";
import galleryImg7 from "../assets/images/main.jpg";
import galleryImg8 from "../assets/images/dessert.jpg";
import galleryImg9 from "../assets/images/interior.jpg";

const galleryData = [
  {
    id: 1,
    image: galleryImg1,
    title: "Interior",
    subtitle: "The Dining Room",
  },
  {
    id: 2,
    image: galleryImg2,
    title: "Food",
    subtitle: "Seared Scallops",
  },
  {
    id: 3,
    image: galleryImg3,
    title: "Kitchen",
    subtitle: "The Pass",
  },
  {
    id: 4,
    image: galleryImg4,
    title: "Food",
    subtitle: "Burrata and Tomato",
  },
  {
    id: 5,
    image: galleryImg5,
    title: "Chef",
    subtitle: "Chef Julien",
  },
  {
    id: 6,
    image: galleryImg6,
    title: "Bar",
    subtitle: "Savora Gold",
  },
  {
    id: 7,
    image: galleryImg7,
    title: "Food",
    subtitle: "Dry-Aged Ribeye",
  },
  {
    id: 8,
    image: galleryImg8,
    title: "Dessert",
    subtitle: "Chocolate Delice",
  },
  {
    id: 9,
    image: galleryImg9,
    title: "Dining",
    subtitle: "Evening Service",
  },
];

function Gallery() {
  return (
    <>
      <SEO
        title="Restaurant & Food Gallery | SAVORA"
        description="Explore SAVORA's dining spaces, culinary creations, chefs, and restaurant atmosphere."
      />
      <main>
        <section
          className="gallery-section-first"
          style={{ backgroundImage: `url(${backImageTop})` }}
        >
          <div className="gallery-content">
            <h5
              className="text-uppercase fw-bold section-eyebrow"
              style={{ color: "var(--color-gold)" }}
            >
              MOMENTS
            </h5>
            <h1 className="gallery-title display-1 py-3">Our Gallery</h1>
          </div>
        </section>

        <section className="gallery-section-second">
          <div className="row g-3">
            {galleryData.map((galleryItem) => (
              <div className="col-12 col-md-6 col-lg-4" key={galleryItem.id}>
                <div className="gallery-image-container">
                  <img
                    src={galleryItem.image}
                    className="gallery-image"
                    alt={galleryItem.title}
                  />

                  <div className="gallery-image-overlay">
                    <h6 className="gallery-image-title fw-bold">
                      {galleryItem.title}
                    </h6>
                    <p className="gallery-image-subtitle fw-bold">
                      {galleryItem.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Gallery;
