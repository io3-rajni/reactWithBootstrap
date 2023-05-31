import { useState } from "react";
const IncrementDecrement = () => {
  const [count, setCount] = useState(0);
  console.log("count", count);
  const increaseButton = () => {
    setCount(count + 1);
  };
  const decreaseButton = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const tenDigitIncrease = () => {
    setCount(count + 10);
    console.log("ten", count);
  };
  const resetButton = () => {
    setCount(0);
  };
  //   console.log("ndhcdh", count);
  return (
    <>
      <div className="btnDiv">
        <h1 className="heading">{count}</h1>
        <div className="btn1">
          <button onClick={increaseButton} className="button">
            Increase
          </button>

          <button onClick={decreaseButton} className="button1">
            Decrease
          </button>
        </div>
        <div className="btn2">
          <button onClick={tenDigitIncrease} className="button2">
            Add 10
          </button>
          <button onClick={resetButton} className="button3">
            resetAll
          </button>
        </div>
      </div>
    </>
  );
};
export default IncrementDecrement;
