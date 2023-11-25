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
       <h1>{event.title}</h1>
       <p></p>
       <p>{event.description}</p>
       <p>{event.location}</p>
       <p>{event.created_at}</p>
       <p>{event.start_time}</p>
       <p>{event.date_event}</p>
       <p>{event.end_time}</p>
      </button>
    </Link>
  );
};

export default MagazineContainer;
