import React, { Component } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  //fontSize: calc("10px" + "2vmin"),
  backgroundImage: `url(./assets/images/wallpapers.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "1080px",
  width: "1920px",
  overflow: "hidden",
};

class Mapcoordinates extends Component {


  
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }
getData(props) {
  console.log(props);
}
  render() {
    return (
      <div>
        <ReactSketchCanvas
          style={styles}
          strokeWidth={4}
          strokeColor="black"
          backgroundImage="./assets/images/wallpapers.jpg"
          background="red"
          onUpdate={this.getData}
        />
        {/* <button
          onClick={() => {
            this.canvas.current
              .exportImage("png")
              .then((data) => {
                console.log(data);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
            Get Image
        </button> */}
      </div>
    );
  }
};

export default Mapcoordinates;
