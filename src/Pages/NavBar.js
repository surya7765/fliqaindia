import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/navbar/Index";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
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
      <NavBar toggle={toggle} />
    </>
  );
}

export default Home;
