import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import './Magazine.css'

const Magazine = () => {
  const { contextTheme } = useThemeContext(); 
  return (
  
  <div className="page-magazine-container">
    <div className="interaction-section">
      btn
    </div>
    <div className={`title-section`}>title</div>
    <div className="content-section">
    content
    </div>
    <div className={`info-section container-${contextTheme} container-info`}>
      info
    </div>
    <div className={`reporter-section container-${contextTheme} container-info`}>reporter</div>
  </div>); 
};

export default Magazine;
