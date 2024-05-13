import React from "react";
import { Link } from "react-router-dom";

const Buttonnext = ({ path, name }) => {
  return (
    <button className="cursor-pointer p-4 hover:text-gray-500">
      {}
      <Link to={path}>{name}</Link>
    </button>
  );
};

export default Buttonnext;
