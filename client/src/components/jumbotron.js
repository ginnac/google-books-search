import React from "react";

function Jumbotron({ children }) {


  return (
    <div
      style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/01/38/57/38/240_F_138573824_W4VSqVz02lHfBwxvgkLJwcng1m9P3n7P.jpg)`,
      backgroundSize: "cover", height: 600, clear: "both", paddingTop: 220, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;