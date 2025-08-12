import { useState } from "react";

export default function LudoBoard() {
  // let [blueScore, setBlueScore] = useState(0);
  // let [yellowScore, setYellowScore] = useState(0);
  // let [greenScore, setGreenScore] = useState(0);
  // let [redScore, setRedScore] = useState(0);
  let [scores, setScores] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0,
  });
  let [arr, setArr] = useState([]);

  function updateBlue() {
    console.log(`scores.blue = ${scores.blue}`);
    setScores((prevScores) => {
      return { ...prevScores, blue: prevScores.blue + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, "Blue"];
    });
    console.log(arr);
  }

  function updateYellow() {
    console.log(`scores.yellow = ${scores.yellow}`);
    setScores((prevScores) => {
      return { ...prevScores, yellow: prevScores.yellow + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, "Yellow"];
    });
    console.log(arr);
  }

  function updateGreen() {
    console.log(`scores.green = ${scores.green}`);
    setScores((prevScores) => {
      return { ...prevScores, green: prevScores.green + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, "Green"];
    });
    console.log(arr);
  }

  function updateRed() {
    console.log(`scores.red = ${scores.red}`);
    setScores((prevScores) => {
      return { ...prevScores, red: prevScores.red + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, "Red"];
    });
    console.log(arr);
  }

  return (
    <div>
      <p>Game Begin</p>
      <p>{arr}</p>
      <div>
        <p>Blue = {scores.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow = {scores.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green = {scores.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red = {scores.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
