import React from "react";
import "./Loader.css";

const Loader = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return <span class="loader"></span>;
};

export default Loader;
