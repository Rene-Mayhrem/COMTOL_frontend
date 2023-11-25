import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateEvent.css";
import axios from "axios";

const CreateEvent = () => {
  //? change to another component
  let navigate = useNavigate();

  //? Create an empty event
  const [event, setEvent] = useState({
    title: "test",
    description: "test description",
    created_at: "2023-10-02",
    date_event: "2023-10-02",
    start_time: "09:00",
    end_time: "11:00",
    location: "toluca, mex",
  });

  //? deconstruct event object
  const {
    title,
    description,
    date_event,
    created_at,
    created_by,
    start_time,
    end_time,
    location,
  } = event;

  //? Set new values from the form to the Event object in JSON format
  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target_value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(event);
    await axios.post("http://localhost:8080/events", event);
    navigate("/");
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
          onChange={(e) => {
            onInputChange(e);
          }}
          value={title}
        />

        <label htmlFor="description">Descripción</label>
        <input
          type="description"
          className="form-create"
          placeholder="agrega la descripción"
          name="description"
          onChange={(e) => {
            onInputChange(e);
          }}
          value={description}
        />

        <label htmlFor="date_event">Fecha del evento</label>
        <input
          type="date"
          className="form-create"
          name="date_event"
          onChange={(e) => {
            onInputChange(e);
          }}
          value={date_event}
        />

        <label htmlFor="start_time">Hora de inicio</label>
        <input
          type="time"
          className="form-create"
          name="start_time"
          onChange={(e) => {
            onInputChange(e);
          }}
          value={start_time}
        />

        <label htmlFor="end_time">Hora de término</label>
        <input
          type="time"
          className="form-create"
          name="end_time"
          onChange={(e) => {
            onInputChange(e);
          }}
          value={end_time}
        />

        <label htmlFor="location">Ubicación</label>
        <input
          type="location"
          className="form-create"
          placeholder="agrega la ubicación"
          name="location"
          onChange={(e) => {
            onInputChange(e);
          }}
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
