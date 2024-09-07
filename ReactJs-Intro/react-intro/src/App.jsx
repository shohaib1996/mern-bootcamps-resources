import { Route, Routes } from "react-router-dom";
import "./app.scss";
// import ControlledInput from "./components/ControlledInput";
// import Map from "./components/Map";
// import MyFirstComponent from "./components/MyFirstComponent";
// import SideEffect from "./components/SideEffect";
import Leadership from "./components/Leadership";
import Home from "./components/Home";
import People from "./components/People";
import SingleUser from "./components/SingleUser";
import UsingAxios from "./components/UsingAxios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route
        path="/top-leaderships"
        element={<Leadership></Leadership>}
      ></Route>
      <Route path="/people" element={<People></People>}></Route>
      <Route path="/user/:id" element={<SingleUser></SingleUser>}></Route>
      <Route path="/axios" element={<UsingAxios></UsingAxios>}></Route>
      {/* <MyFirstComponent></MyFirstComponent>
      <Map></Map> */}
      {/* <ControlledInput></ControlledInput> */}
      {/* <SideEffect></SideEffect> */}
    </Routes>
  );
}

export default App;
