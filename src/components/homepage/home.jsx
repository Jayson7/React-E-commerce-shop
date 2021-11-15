import React, { Component } from "react";
import s1 from "./1.jpg";
import s2 from "./2.jpg";
import s3 from "./3.jpg";
import s4 from "./4.jpg";
import s5 from "./5.jpg";

import "./home.css";
import BackgroundSlider from "react-background-slider";
import "./home";
// import textslider from "./home";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <BackgroundSlider
            images={[s1, s2, s3, s4, s5]}
            duration={2}
            transition={6}
          />

          <div className="grab">
            <div className="texthome">
              <h1 className="text1"> We sell Explicit products </h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                dolores accusantium sequi! Adipisci.
              </h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum dolorum quos quidem officia earum eligendi! Unde
                quisquam pariatur voluptatibus facilis labore optio minima,
                ratione quam iusto quo repellendus adipisci excepturi.
              </p>
            </div>
            <div className="btns">
              <button>Cart</button>
              <button>Shop</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
