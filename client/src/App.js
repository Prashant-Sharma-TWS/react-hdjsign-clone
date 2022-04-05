import "./App.css";
import { BsChevronRight, BsFillStarFill, BsHeart } from "react-icons/bs";
import { SmallSlider } from "./Components/SmallSlider";
import { useState } from "react";
import { Upload } from "./Components/Upload";

function App() {
  const [currImg, setCurrImg] = useState(
    "https://cdn.shopify.com/s/files/1/0297/2123/1413/products/Customneonsign.jpg?v=1646202787"
  );

  return (
    <div className="App">
      <main className="product-top">
        <section className="product-image-box">
          <div className="wrapper-images">
            <img src={currImg} alt="curr-img" />
          </div>
          <div className="slider">
            <SmallSlider setCurrImg={setCurrImg} />
          </div>
        </section>
        <section className="product-shop">
          <div className="group-title flex-bt-c">
            <span>Custom Your Own Neon</span>
            <BsChevronRight />
          </div>
          <div className="ratings">
            <BsFillStarFill fill="#EDC126" />
            <BsFillStarFill fill="#EDC126" />
            <BsFillStarFill fill="#EDC126" />
            <BsFillStarFill fill="#EDC126" />
            <BsFillStarFill fill="#EDC126" />
            <span>(67 reviews)</span>
          </div>
          <div className="prices">$80.00</div>
          <p className="installments">
            Pay in 4 interest-free installments for orders over $50 with&nbsp;
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="shop-pay-logo"
              viewBox="0 0 424 102"
              fill="none"
              width="50px"
            >
              <path
                d="M108.665 32.87c-3.402-7.136-9.852-11.746-19.57-11.746a19.48 19.48 0 00-15.303 7.868l-.355.432V1.454a.61.61 0 00-.61-.61h-13.74a.61.61 0 00-.599.61v80.23a.598.598 0 00.598.598h14.717a.61.61 0 00.609-.598V47.475c0-6.648 4.433-11.358 11.525-11.358 7.757 0 9.718 6.383 9.718 12.888v32.679a.598.598 0 00.599.598h14.682a.609.609 0 00.61-.598v-34.63c0-1.185 0-2.349-.155-3.48a30.617 30.617 0 00-2.726-10.704zM35.184 44.76s-7.491-1.76-10.25-2.47c-2.76-.71-7.58-2.217-7.58-5.863 0-3.646 3.89-4.81 7.834-4.81 3.945 0 8.334.954 8.677 5.331a.632.632 0 00.632.576l14.505-.055a.618.618 0 00.587-.414.62.62 0 00.034-.251C48.725 22.797 36.436 17.788 25.1 17.788c-13.442 0-23.271 8.865-23.271 18.64 0 7.136 2.017 13.829 17.874 18.483 2.782.809 6.56 1.862 9.863 2.781 3.967 1.109 6.105 2.782 6.105 5.42 0 3.058-4.432 5.185-8.787 5.185-6.305 0-10.782-2.338-11.148-6.538a.632.632 0 00-.632-.554l-14.472.067a.631.631 0 00-.632.654C.665 75.145 13.431 82.27 25.332 82.27c17.73 0 25.743-9.973 25.743-19.315.022-4.388-.987-14.384-15.891-18.196zm186.611-23.658c-7.369 0-13.542 4.078-17.52 8.998v-8.422a.597.597 0 00-.587-.599h-13.763a.601.601 0 00-.599.599v78.678a.598.598 0 00.599.587h14.727a.587.587 0 00.587-.587V74.492h.222c2.338 3.568 8.732 7.846 17.087 7.846 15.714 0 28.812-13.032 28.812-30.64.011-16.9-13.021-30.596-29.565-30.596zm-1.363 46.242a15.613 15.613 0 1115.226-15.647 15.4 15.4 0 01-4.362 10.987 15.404 15.404 0 01-10.864 4.66zm-74.689-49.7c-13.73 0-20.578 4.666-26.075 8.4l-.166.11a1.364 1.364 0 00-.41 1.807l5.43 9.353a1.373 1.373 0 00.964.665 1.342 1.342 0 001.108-.3l.433-.354c2.825-2.372 7.358-5.54 18.328-6.405 6.106-.488 11.381 1.108 15.27 4.743 4.278 3.945 6.838 10.316 6.838 17.043 0 12.378-7.292 20.157-19.005 20.312-9.652-.055-16.135-5.086-16.135-12.522 0-3.945 1.785-6.516 5.264-9.087a1.349 1.349 0 00.41-1.728l-4.876-9.22a1.42 1.42 0 00-.853-.687 1.371 1.371 0 00-1.108.144c-5.474 3.247-12.19 9.186-11.824 20.6.443 14.528 12.522 25.62 28.224 26.075h1.862c18.661-.61 32.136-14.462 32.136-33.245 0-17.242-12.566-35.704-35.815-35.704z"
                fill="rgb(90, 49, 244)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M281.734 1.044h125.652c8.672 0 15.703 7.03 15.703 15.703V85.54c0 8.672-7.031 15.702-15.703 15.702H281.734c-8.672 0-15.702-7.03-15.702-15.702V16.747c0-8.673 7.03-15.703 15.702-15.703zm28.191 54.488c10.483 0 17.985-7.647 17.985-18.362 0-10.66-7.502-18.351-17.985-18.351h-18.506a.829.829 0 00-.831.83v50.787a.84.84 0 00.831.831h6.959a.831.831 0 00.831-.83V56.362a.83.83 0 01.832-.831h9.884zm-.532-29c5.696 0 9.896 4.498 9.896 10.638 0 6.15-4.2 10.638-9.896 10.638h-9.352a.83.83 0 01-.832-.82V27.363a.844.844 0 01.832-.831h9.352zm20.567 34.995a9.875 9.875 0 014.123-8.467c2.704-2.028 6.892-3.08 13.109-3.324l6.593-.222v-1.95c0-3.89-2.615-5.54-6.815-5.54s-6.848 1.484-7.469 3.911a.793.793 0 01-.797.576h-6.505a.816.816 0 01-.807-.588.815.815 0 01-.024-.354c.975-5.762 5.74-10.14 15.902-10.14 10.793 0 14.682 5.02 14.682 14.606v20.368a.823.823 0 01-.239.595.835.835 0 01-.592.247h-6.571a.836.836 0 01-.592-.247.833.833 0 01-.239-.595v-1.518a.619.619 0 00-.783-.65.62.62 0 00-.325.218c-1.962 2.138-5.153 3.69-10.239 3.69-7.458.022-12.412-3.879-12.412-10.616zm23.825-4.433V55.52l-8.532.444c-4.499.232-7.126 2.105-7.126 5.252 0 2.848 2.405 4.433 6.594 4.433 5.696 0 9.064-3.08 9.064-8.544v-.011zm14.772 23.626v5.928a.854.854 0 00.609.864c1.159.316 2.357.462 3.558.433 6.371 0 12.189-2.327 15.514-11.392l14.627-39.018a.847.847 0 00-.112-.753.848.848 0 00-.675-.355h-6.815a.829.829 0 00-.798.576l-8.056 24.712a.854.854 0 01-1.596 0l-9.286-24.778a.855.855 0 00-.787-.543h-6.649a.841.841 0 00-.786 1.108l13.674 35.128a.82.82 0 010 .565l-.432 1.363a7.877 7.877 0 01-7.945 5.618 16.45 16.45 0 01-3.048-.288.839.839 0 00-.918.472.826.826 0 00-.079.36z"
                fill="rgb(90, 49, 244)"
              ></path>
            </svg>
            &nbsp;
            <a href="#learn-more">Learn more</a>
          </p>
          <form>
            <div className="background-img">
              <p>Background</p>
              <span>
                <img
                  src="https://doshopify.com/product-personalizer/images/hdjneonsign.myshopify.com/Wedding.png?v=123"
                  alt="bg-img"
                />
              </span>
              <span>
                <img
                  src="https://doshopify.com/product-personalizer/images/hdjneonsign.myshopify.com/Wedding.png?v=123"
                  alt="bg-img"
                />
              </span>
              <span>
                <img
                  src="https://doshopify.com/product-personalizer/images/hdjneonsign.myshopify.com/Wedding.png?v=123"
                  alt="bg-img"
                />
              </span>
              <span>
                <img
                  src="https://doshopify.com/product-personalizer/images/hdjneonsign.myshopify.com/Wedding.png?v=123"
                  alt="bg-img"
                />
              </span>
              <span>
                <img
                  src="https://doshopify.com/product-personalizer/images/hdjneonsign.myshopify.com/Wedding.png?v=123"
                  alt="bg-img"
                />
              </span>
              <span>
                <img
                  src="https://doshopify.com/product-personalizer/images/hdjneonsign.myshopify.com/Wedding.png?v=123"
                  alt="bg-img"
                />
              </span>
              <span>
                <img
                  src="https://doshopify.com/product-personalizer/images/hdjneonsign.myshopify.com/Wedding.png?v=123"
                  alt="bg-img"
                />
              </span>
              <span>
                <img
                  src="https://doshopify.com/product-personalizer/images/hdjneonsign.myshopify.com/Wedding.png?v=123"
                  alt="bg-img"
                />
              </span>
            </div>
            <div className="sizes">
              <p>Size (width at widest point)</p>
              <div>
                <span>20inch''/50cm</span>
                <span>24inch''/60cm</span>
                <span>27inch''/70cm</span>
                <span>31inch''/80cm</span>
                <span>35inch''/90cm</span>
                <span>40inch''/100cm</span>
                <span>47inch''/120cm</span>
                <span>59inch''/150cm</span>
                <span>79inch''/200cm</span>
              </div>
            </div>
            <div className="type-your-text">
              <p>MAX 8 LETTERS PER LINE</p>
              <h6>Type Your Text</h6>
              <textarea
                name="message"
                placeholder="Create your text"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <div className="choose-font">
              <p>Choose Your Font</p>
              <div>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
                <span>font-name</span>
              </div>
            </div>
            <div className="choose-color">
              <p>Choose Your Color</p>
              <div>
                <span style={{ backgroundColor: "red" }}></span>
                <span style={{ backgroundColor: "pink" }}></span>
                <span style={{ backgroundColor: "orange" }}></span>
                <span style={{ backgroundColor: "rgb(255, 244, 226)" }}></span>
                <span style={{ backgroundColor: "rgb(250, 250, 250)" }}></span>
                <span style={{ backgroundColor: "rgb(244, 252, 31)" }}></span>
                <span style={{ backgroundColor: "rgb(0, 255, 102)" }}></span>
                <span style={{ backgroundColor: "rgb(0, 219, 254)" }}></span>
                <span style={{ backgroundColor: "blue" }}></span>
                <span style={{ backgroundColor: "purple" }}></span>
              </div>
            </div>
            <div className="backing-shape">
              <p>Backing Shape</p>
              <div>
                <span>backing</span>
                <span>backing</span>
                <span>backings</span>
              </div>
            </div>
            <div className="power-plug">
              <p>Power Plug</p>
              <div>
                <span>US/CAN</span>
                <span>UK</span>
                <span>EUR</span>
                <span>AUS/NZ</span>
              </div>
            </div>
            <div className="sign-placement">
              <p>Choose Your Sign Placement</p>
              <div>
                <span>Indoor</span>
                <span>Outdoor[+$39]</span>
              </div>
            </div>
            <div className="lead-time">
              <p>LEAD TIME</p>
              <div>
                <span>Free shipping, send out in 6 days</span>
                <span>Rush order, send out in 2 days(+$38)</span>
              </div>
            </div>
            <div className="preview">
              <button>PREVIEW</button>
            </div>
            <div className="add-to-cart flex-bt-c">
              <button>ADD TO CART</button>
              <span className="flex-bt-c">
                <BsHeart style={{ fontSize: "25px" }} />
              </span>
            </div>
          </form>
        </section>
      </main>
      <div className="more-details-section">
        <div className="more-details-section-header">
          <span>PRODUCT DETAILS</span>/<span>Upload Image Or Logo</span>/
          <span>SHIPPING</span>/<span>RFGs</span>
        </div>
        <div className="more-details-section-shown">
          <Upload />
        </div>
      </div>
    </div>
  );
}

export default App;
