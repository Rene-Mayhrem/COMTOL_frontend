import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import "./MagazineContainer.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const MagazineContainer = ({event}) => {
  const { contextTheme } = useThemeContext();

  return (
    <Link to="/magazine">
      <button className={`magazine-container magazine-${contextTheme}`}>
       holaaa
       <h1>{event.title}</h1>
       <p>{event.id}</p>
      </button>
    </Link>
  );
};

export default MagazineContainer;
