import React, { useEffect, useState } from "react";
import "./Home.css";
import { useThemeContext } from "../../context/ThemeContext";
import MagazineContainer from "../../feature/container/magazine/MagazineContainer";
import axios  from "axios";

export default function Home() {
  const { contextTheme } = useThemeContext();

  //? initialize tags as empty
  const [tags, setTags] = useState([]);
  useEffect(() => {
    loadTags();
  }, []);
  const loadTags  = async () => {
    const result = await axios.get("http://localhost:8080/tags");
    setTags(result.data);
    console.log(result.data)
  }

  //? Consuming events endpoint
  const [events, setEvents] = useState([]);
  useEffect(() => {
    loadEvents();
  }, []);
  const loadEvents = async () => {
    const result = await axios.get("http://localhost:8080/events");
    setEvents(result.data);
    console.log(result.data);
    console.log(events);
  }


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
        {/* <MagazineContainer /> */}
        {
          events.map((event, index) => {
            console.log(event);
            return <MagazineContainer key={index} event={event} />
          })
        }
      </div>
      <div className="menu-filter-section">
        <div className="tag-section">
          {
            tags.map((tag, index) => (
              <p key={index}>{tag.name}</p>
            ))
          }
        </div>
        <div className="editor-section data-container">editor</div>
        <div className="reporter-section data-container">reporter</div>
      </div>
    </div>
  );
}
