import React from "react";
import logo from "./logo.svg";
import axios from "axios";
// import "./App.css";

function App() {
  const [myData, setMyData] = React.useState({ color: "" });

  axios.get("http://svc1.default:3001/svc1/change_color").then((response) => {
    // console.log("Response yo", response.data.data);
    setMyData(response.data.data);
  });

  console.log("My data", myData);
  return (
    <div>
      {/* <h1 style="color:blue;">A Blue Heading</h1> */}
      <p style={{ color: `${myData}`, fontSize: "80px" }}>
        Hi, this is Telepresence
      </p>
    </div>
  );
}

export default App;
