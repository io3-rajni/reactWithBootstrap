import { useState } from "react";

export const TodoComponent = () => {
  const [newData, setNewData] = useState("");
  const [addData, setAddData] = useState([]);
  const handleChange = (e) => {
    setNewData(e?.target?.value);
    console.log("event", e);
  };
  const handleAdd = () => {
    setAddData((addData) => [...addData, newData]);
  };
  console.log("Add Data", addData);

  //   const [addData, setAddData] = useState([]);
  //   const [addValue, setAddValue] = useState([]);
  //   const handleInput = (e) => {
  //     setAddValue(e?.target?.value);
  //     console.log("event", e);
  //   };
  //   const addHandle = () => {
  //     setAddData((addData) => [...addData, addValue]);
  //     setAddValue("");
  //   };
  //   console.log("addData", addData);
  //   const handleDlt = (index) => {
  //     addData.splice(index, 1);
  //     setAddData((addData) => [...addData, addValue]);
  //     // console.log("index", index);
  //   };
  return (
    <>
      {/* <div style={{ textAlign: "center", margin: "4% 0 2% 0" }}>
        <input
          type="text"
          placeholder="type something"
          value={addValue}
          onChange={handleInput}
        /> */}
      {/* <button onClick={addHandle}>Add</button> */}
      {/* </div> */}
      {/* <ul>
        {addData.map((item, i) => {
          console.log("item", item);
          return (
            item && (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "1%",
                }}
              >
                <li>{item}</li>
                <button onClick={handleDlt}>Delete</button>
              </div>
            )
          );
        })}
      </ul> */}
      <div>
        <input
          type="text"
          placeholder="Type Here"
          value={newData}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>add</button>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </>
  );
};
