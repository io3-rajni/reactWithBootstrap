import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./component/button.css";
import ApiBootstrap from "./component/ApiBootstrap";
import IncrementDecrement from "./component/IncrementDecrement";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IncrementDecrement />}></Route>
          <Route path="/ApiBootstrap" element={<ApiBootstrap />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

// { console.log(img); }
export default App;
