import React, { Component } from "react";
import { withController } from "react-scroll-parallax";

class ParallaxImageHelper extends Component {
  handleLoad = () => {
    this.props.parallaxController.update();
  };

  render() {
    return (
      <img
        src={this.props.src}
        onLoad={this.handleLoad}
        alt="Step Background"
      />
    );
  }
}

export default withController(ParallaxImageHelper);
