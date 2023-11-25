import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import "./MagazineContainer.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const MagazineContainer = () => {
  const { contextTheme } = useThemeContext();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const result = await axios.get("http://localhost:8080/events");
    console.log(result.data);
    setEvents(result.data);
  }

  return (
    <Link to="/magazine">
      <button className={`magazine-container magazine-${contextTheme}`}>
       {
        events.map((event, index) => {
          <h1 key={index}>{event.title}</h1>
        })
       }
      </button>
    </Link>
  );
};

export default MagazineContainer;
