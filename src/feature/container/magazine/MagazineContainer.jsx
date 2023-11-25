import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import "./MagazineContainer.css";
import { Link } from "react-router-dom";

const MagazineContainer = () => {
  const { contextTheme } = useThemeContext();
  return (
    <Link to="/magazine">
      <button className={`magazine-container magazine-${contextTheme}`}>
        content
        {contextTheme}
      </button>
    </Link>
  );
};

export default MagazineContainer;
