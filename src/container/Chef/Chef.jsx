import React from "react";
import { images } from "../../constants";
import "./Chef.css";
import { SubHeading } from "../../components";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Sit Tellus Plasti Lipsum Jau Lip Situus Lijjs Ut Sopp Loat Ajj
            Slitus Sppson. Sit Tellus p Situus jj Slitus Sppson.
          </p>
        </div>
        <p className="p__opensans">
          Sit Tellus p Situus jj Slitus Sppson, Sit Tellus Plasti.Sit Tellus
          Plasti Lipsum Jau Lip Situus Lijjs Ut Sopp Loat Ajj Slitus Sppson, Sit
          Tellus Plasti.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
