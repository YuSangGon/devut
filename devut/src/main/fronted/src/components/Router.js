import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Portfolio from "./portfolio/Portfolio";
import Login from "./login/Login";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
