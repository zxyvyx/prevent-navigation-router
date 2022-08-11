import React from "react";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Landing Page</div>
      <div>
        <NavLink to={"/form"}>
          <button className="btn-primary">Daftar Sekarang</button>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
