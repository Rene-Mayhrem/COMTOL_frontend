import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateEvent.css";
import axios from "axios";

const CreateEvent = () => {
  //? change to another component
  let navigate = useNavigate();

  //? get current date in format: yyyy-mm-dd
  const currentDate = () => {
    const getCurrentDate = new Date();
    const year = getCurrentDate.getFullYear();
    const month = getCurrentDate.getMonth() + 1;
    const day = getCurrentDate.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(event);
    try {
      console.log("Am I working?");
      const newEvent = {
        title,
        description,
        created_at: currentDate,
        date_event: dateEvent,
        start_time: startTime,
        end_time: endTime,
        location,
      };
      console.log(newEvent);
      await axios.post("http://localhost:8080/events", newEvent);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-create-event">
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <h2>Crear evento</h2>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          className="form-create"
          placeholder="agrega el título"
          name="title"
          id="title"
          onChange={(e) => {setTitle(e.target.value)}}
          value={title}
        />

        <label htmlFor="description">Descripción</label>
        <input
          type="description"
          className="form-create"
          placeholder="agrega la descripción"
          name="description"
          id="description"
          onChange={(e) => {setDescription(e.target.value)}}
          value={description}
        />

        <label htmlFor="tags">Tags</label>
        <input 
          type="tags"
          className="form-create"
          placeholder="agrega las tags"
          name="tags"
          id="tags"
          onChange={(e) => {setTags(e.target.value)}}
        />

        <label htmlFor="date_event">Fecha del evento</label>
        <input
          type="date"
          className="form-create"
          name="date_event"
          id="date_event"
          onChange={(e) => {setDateEvent(e.target.value)}}
          value={dateEvent}
        />

        <label htmlFor="start_time">Hora de inicio</label>
        <input
          type="time"
          className="form-create"
          name="start_time"
          id="start_time"
          onChange={(e) => {setStartTime(e.target.value)}}
          value={startTime}
        />

        <label htmlFor="end_time">Hora de término</label>
        <input
          type="time"
          className="form-create"
          name="end_time"
          id="end_time"
          onChange={(e) => {setEndTime(e.target.value)}}
          value={endTime}
        />

        <label htmlFor="location">Ubicación</label>
        <input
          type="location"
          className="form-create"
          placeholder="agrega la ubicación"
          name="location"
          id="location"
          onChange={(e) => {setLocation(e.target.value)}}
          value={location}
        />

        <button type="submit" className="btn-form-create-event">
          Registar evento
        </button>

        <Link className="btn-cancel-form-create-event" to="/">
          Cancelar
        </Link>
      </form>
    </div>
  );
};

export default CreateEvent;
