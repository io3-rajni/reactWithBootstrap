import axios from "axios";
import { useEffect, useState } from "react";
const PostApi = () => {
  const [postApi, setPostApi] = useState([]);
  console.log("dfhhgfh", postApi);

  useEffect(() => {
    const payload = {
      userId: 5,
      title: "I love my country",
      city: "delhi",
    };
    axios
      .post("https://dummyjson.com/posts/add", payload)
      .then((res) => {
        setPostApi(res?.data);
        console.log("res", res);
      })

      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name:{postApi?.city}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            ID : {postApi?.userId}
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};
export default PostApi;
