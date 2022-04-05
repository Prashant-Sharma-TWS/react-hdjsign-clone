import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const SmallSlider = ({ setCurrImg }) => {
  const options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: [`<span></span>`, `<span></span>`],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      600: {
        items: 4,
      },
      700: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
  };

  const handleImg = (e) => {
    setCurrImg(e.target.src);
  };
  return (
    <div>
      <OwlCarousel {...options} className="small-slider">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/Customneonsign.jpg?v=1646202787"
            alt="First slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211202164519.jpg?v=1646202787"
            alt="Second slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185606.png?v=1646202787"
            alt="Third slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185637.png?v=1646202787"
            alt="Third slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185300.png?v=1646202785"
            alt="Third slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185250.png?v=1646202785"
            alt="Third slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211020165355_17342693-3a34-4a52-b0e7-8a9acb6d797d.png?v=1639738621"
            onClick={handleImg}
            alt="Third slide"
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211026155928.png?v=1639738621"
            alt="Third slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185339.png?v=1639738621"
            alt="Third slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185332.png?v=1639738616"
            alt="Third slide"
            onClick={handleImg}
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185243.png?v=1639738616"
            alt="Third slide"
            onClick={handleImg}
          />
        </div>
      </OwlCarousel>
    </div>
  );
};

/* <div
  id="product-image-carousel"
  className="carousel slide"
  data-ride="carousel"
  data-interval="false"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/Customneonsign.jpg?v=1646202787"
        alt="First slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211202164519.jpg?v=1646202787"
        alt="Second slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185606.png?v=1646202787"
        alt="Third slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185637.png?v=1646202787"
        alt="Third slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185300.png?v=1646202785"
        alt="Third slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185250.png?v=1646202785"
        alt="Third slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211020165355_17342693-3a34-4a52-b0e7-8a9acb6d797d.png?v=1639738621"
        alt="Third slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211026155928.png?v=1639738621"
        alt="Third slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185339.png?v=1639738621"
        alt="Third slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185332.png?v=1639738616"
        alt="Third slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0297/2123/1413/products/20211217185243.png?v=1639738616"
        alt="Third slide"
      />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#product-image-carousel"
    role="button"
    data-slide="prev"
  >
    <span aria-hidden="true">
      <BsChevronLeft />
    </span>
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#product-image-carousel"
    role="button"
    data-slide="next"
  >
    <span aria-hidden="true">
      <BsChevronRight />
    </span>
    <span className="sr-only">Next</span>
  </a>
</div>; */
