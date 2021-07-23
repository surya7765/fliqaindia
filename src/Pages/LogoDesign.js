import { Container } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import { BtnLink2, Rectangle, Btn, BtnLink1 } from "./LogoStyle";

const Services = () => {
  return (
    <>
      <Helmet>
        <title> Logo Design</title>
        <meta
          name="description"
          content="Make your own brand identity through us. Start your design now."
        />
      </Helmet>
      <Container style={{ marginTop: "50px" }}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            textAlign: "center",
            lineHeight: "30px",
          }}
        >
          <h4>What is Logo design ?</h4>
          <p>
            Logo tells the story of your brand. It enhances your brand image and
            speaks to your audience. Logo design makes the first impression for
            you in your working environment. Gives your business and brand an
            identity and projects a professional image. It creates memorable
            visuals to the outside world and build loyalty.
          </p>
        </div>
      </Container>
      <Rectangle>
        <Btn>
          <BtnLink1>Start designing</BtnLink1>
          <div style={{margin:"20px"}}> </div>
          <BtnLink2>Get a quote</BtnLink2>
        </Btn>
      </Rectangle>
    </>
  );
};

export default Services;
