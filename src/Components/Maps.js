import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyBkw5dCRF52His5q_Nw-nDEqOX7_eHSm70"}
          style={{ height: "400px", width: "300px" }}
          zoom={12}
          center={{
            lat: 40.4127355,
            lng: -3.695428
          }}
          markers={[
            { lat: 40.409711, lng: -3.692569 },
            { lat: 40.412072, lng: -3.676463 },
            { lat: 40.451824, lng: -3.690759 }
          ]}
        />
      </div>
    );
  }
}
