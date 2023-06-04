import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./component/button.css";
import ApiBootstrap from "./component/ApiBootstrap";
import IncrementDecrement from "./component/IncrementDecrement";
import PostApi from "./component/PostApi";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IncrementDecrement />}></Route>
          <Route path="/ApiBootstrap" element={<ApiBootstrap />}></Route>
          <Route path="/PostApi" element={<PostApi />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
// { console.log(img); }
