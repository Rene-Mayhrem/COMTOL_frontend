import React from "react";
import "./Home.css";
import { useThemeContext } from "../../context/ThemeContext";
import MagazineContainer from "../../feature/container/magazine/MagazineContainer";

export default function Home() {
  const { contextTheme } = useThemeContext();
  return (
    <div className="home-container">
      <div className="filter-section">
        <button className={`btn-filter filter-${contextTheme}`}>
          Agregados recientemente
        </button>
        <button className={`btn-filter filter-${contextTheme}`}>
          En tendencia
        </button>
      </div>
      <div className="magazine-section">
        <MagazineContainer />
        <MagazineContainer />
        <MagazineContainer />
        <MagazineContainer />
      </div>
      <div className="menu-filter-section">
        <div className="tag-section">tag</div>
        <div className="editor-section data-container">editor</div>
        <div className="reporter-section data-container">reporter</div>
      </div>
    </div>
  );
}
