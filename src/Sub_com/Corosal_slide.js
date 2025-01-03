import "../Components_styles/carousel.css";

function carousel_slide_com() {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=""
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            ></rect>
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href="https://wallpapercave.com/wp/wp11876050.jpg"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.123</h1>
              <p className="opacity-75">
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            ></rect>
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href="https://i.pinimg.com/1200x/1b/f7/c8/1bf7c8005d60149b39eb4b4beea81367.jpg"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            ></rect>
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href="/assert_images/2151549668.jpg"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default carousel_slide_com;
