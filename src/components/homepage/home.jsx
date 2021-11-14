import React, { Component } from "react";
import s1 from "./1.jpg";
import "./home.css";
import BackgroundSlider from "react-background-slider";
import "./home";
// import textslider from "./home";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="grab">
            <div className="texthome">
              <BackgroundSlider images={[s1]} duration={10} transition={2} />

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
            <button>Cart</button>
            <button>Shop</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
