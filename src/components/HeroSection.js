import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@material-ui/core";
import "./HeroSection.css";
import { Helmet } from "react-helmet";

function HeroSection() {
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 2,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          FliqaIndia: Photography, Videography & Graphic Design related creative
          platform
        </title>
        <meta
          name="description"
          content=" Personalised platforms for Photography, Videography with
Graphics. One of the leading platforms in the creative domain."
        />
      </Helmet>
      <div style={{ margin: "20px 0px 0px 0px", padding: "10px" }}>
        <Container maxWidth="lg">
          <Slider {...settings}>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://fliqaindia.com/static/media/pre-wedding-photography.7a9ec997.webp"
                  alt="Pre-Wedding shoot"
                />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  Pre-Wedding shoot
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://fliqaindia.com/static/media/portfolio-photography.1db97649.webp"
                  alt="Portfolio Shoot"
                />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  Portfolio Shoot
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://fliqaindia.com/static/media/Drone-Photography.46fd8050.webp"
                  alt="Drone Design"
                />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  Drone Design
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://fliqaindia.com/static/media/Graphic-design.fff9f6a1.webp"
                  alt="Graphics Design"
                />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  Graphics Design
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://fliqaindia.com/static/media/promotional-video.9ec07568.webp"
                  alt="promotional video"
                />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  promotional video
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://fliqaindia.com/static/media/Beach-photography.b4efc55b.webp"
                  alt="Beach Photography"
                />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  Beach Photography
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://fliqaindia.com/static/media/fashion-photography.9eb45ae4.webp"
                  alt="fashion photography"
                />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  fashion photography
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://fliqaindia.com/static/media/wedding-Photography.2cb144d7.webp"
                  alt="wedding photography"
                />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  wedding photography
                </p>
              </div>
            </div>
          </Slider>
          <div className="about">
            <div className="bgImg">
              <div
                className="aboutus"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  justifyItems: "center",
                  textAlign: "center",
                }}
              >
                <h1>About Us</h1>
                <p>
                  <span style={{ color: "#5684C8" }}>Fliqaindia</span> for
                  everyone
                </p>
                <p className="stylePtag">
                  With this belief, we at{" "}
                  <span style={{ color: "#5684C8" }}>Fliqaindia</span> started
                  our journey 5 years ago with the belief that everyone has the
                  right to quality photography to help them better capture and
                  conserve their special moments. We have been appreciated and
                  recommended by Start Up India, StartUp Bengal, Imagesbazaar
                  and Digital India for our novel initiative. We have partnered
                  with Canvera to give you the best service possible. We are
                  also trusted by Justdial, WedMEGood, Shaadisaga, weddingwire
                  and so many well known event organisers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeroSection;
