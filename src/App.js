import logo from "./logo.svg";
import "./App.css";
import "./component/button.css";

import Button from "./component/Button";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [count, setCount] = useState(0);
  console.log("count", count);
  const buttonHandle = () => {
    setCount(count + 1);
  };
  const buttonHandle1 = () => {
    setCount(count - 1);
  };
  // console.log("ndhcdh", count);
  //   const [data1, setData1] = useState([]);
  //   console.log("chbdhf", data1);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((response) => {
  //       setData1(response?.data?.products);
  //       console.log("Response", response);
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // }, []);
  return (
    <>
      <div className="btnDiv">
        <button onClick={buttonHandle} className="button">
          Increase
        </button>
        <h1 className="heading">{count}</h1>
        <button onClick={buttonHandle1} className="button1">
          Decrease
        </button>
      </div>
    </>

    //   <>
    //     <div className="App">
    //       {data1?.map((item, index) => {
    //         console.log("map", item);
    //         return (
    //           <>
    //             {/* <h1>{increase}</h1> */}
    // {
    //  <button onClick={handleIncrease}>Increase Button</button>
    //   <button>Increase Button</button>;<div></div> */
    // }
    // <div
    //   className="maindiv"
    //   style={{
    //     height: "30rem",
    //   }}
    // >
    //   <div
    //     class="card"
    //     style={{
    //       width: "22rem",
    //       marginBottom: "2rem",
    //       borderRadius: "10px",
    //       boxShadow: "0px 4px 3px 3px grey",
    //       marginTop: "1rem",
    //     }}
    //   >
    //     <div
    //       style={{
    //         height: "10rem",
    //         marginTop: "1rem",
    //       }}
    //     >
    //       <img
    //         src={item?.thumbnail}
    //         class="card-img-top"
    //         alt="images_show"
    //         style={{
    //           height: "10rem",
    //           width: "13rem",
    //         }}
    //       />
    //     </div>
    //     <div
    //       className="card-body"
    //       style={{
    //         height: "12rem",
    //       }}
    //     >
    //       <h5 className="card-title">
    //         <b>Title:</b>
    //         {item?.title}
    //       </h5>
    //       <h5 className="card-title">
    //         <b>Brand:</b>
    //         {item?.brand}
    //       </h5>
    //       <h5 className="card-title">
    //         <b>Category:</b> {item?.category}
    //       </h5>
    //       <p className="card-text">{item?.description}</p>
    //     </div>
    //     <ul className="list-group list-group-flush">
    //       <li className="list-group-item">
    //         <b>Prices: </b>
    //         {item?.price}
    //         <b>Discount:</b>
    //         {item?.discountPercentage}
    //       </li>
    //       <div>
    //         <button>
    //           <b>Rating:</b>
    //           {item?.rating}
    //         </button>
    //         <button>
    //           <b>Stock:</b>
    //           {item?.stock}
    //         </button>
    //       </div>
    //     </ul>
    //     {/* <div className="card-body">
    //     <a href="#" className="card-link">
    //       Card link
    //     </a>
    //     <a href="#" className="card-link">
    //       Another link
    //     </a> */}
    //     {/* </div> */}
    //   </div>
    // </div>
    //             </>
    //           );
    //         })}
    //       </div>
    //     </>
  );
};
// console.log(img);
export default App;
