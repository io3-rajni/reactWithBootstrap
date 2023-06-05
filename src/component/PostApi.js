import axios from "axios";
import { useEffect, useState } from "react";
const PostApi = () => {
  const [postApi, setPostApi] = useState([]);
  const [apiRes, setAPiRes] = useState([]);
  const [updateApiData, setUpdateApiData] = useState({});
  console.log("dfhhgfh", postApi);
  const [getApi, setGetApi] = useState([]);
  console.log("getApi", getApi);
  useEffect(() => {
    const payload = {
      userId: 5,
      title: "I love my country",
      // data: "hello ",
    };
    axios
      .post("https://dummyjson.com/posts/add", payload)
      .then((res) => {
        setPostApi(res?.data);
        // console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      // console.log{"dkjfdf",getApi}
      .then((res1) => {
        setGetApi(res1?.data?.users);
        console.log("jhdefw", res1);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  const updateTitle = (id) => {
    // console.log("id", id);
    axios
      .put(`https://dummyjson.com/posts/${id}`, {
        title: "I think I should shift to the moon",
      })
      .then((res) => {
        setUpdateApiData(res?.data);
        console.log("res", res?.data);
      })
      .catch((error) => console.log("err", error));
  };

  // delete api ---
  const deleteCard = (id) => {
    console.log("id", id);
    axios
      .delete(`https://dummyjson.com/posts/${id}`)
      .then((res) => {
        // setUpdateApiData(res?.data);
        console.log("res delete", res);
      })
      .catch((error) => console.log("err", error));
  };

  //   console.log("apiRes", apiRes);
  //   console.log("updateApiData", updateApiData);

  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {apiRes?.map((item, i) => {
      //   console.log("item", item, i);
      return (
        <div
          className="card"
          style={{ width: "18rem", margin: "2%" }}
          onClick={() => deleteCard(item?.id)}
          key={i}
        >
          <div className="card-body">
            <h5 className="card-title" onClick={() => updateTitle(item?.id)}>
              {item?.title}
            </h5>
            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p className="card-text">{item?.body}</p>
            {item?.tags?.map((item, i) => {
              return (
                <div key={i}>
                  <span>Tags:</span>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">ID:{postApi?.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            UserID : {postApi?.userId}
          </h6>
          <p className="card-text">Title:{postApi?.title}</p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
      {/* SecondCard */}
      {getApi?.map((item, i) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="firstName">First-Name:{item?.firstName}</h5>
              <h5 className="lastName">Last-Name:{item?.lastName}</h5>
              <h6 className="dob">DOB:{item?.birthDate}</h6>
              <p className="card-text">Address: {item?.address?.address}</p>
              <p className="card-text">Bank:{item?.bank?.cardNumber}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default PostApi;
