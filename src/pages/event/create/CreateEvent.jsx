import React from 'react'
import { Link } from 'react-router-dom'
import './CreateEvent.css'

const CreateEvent = () => {
  return (
    <div className='form-create-event'>
      <form>
        <h2>Crear evento</h2>
        <label htmlFor="title">Título</label>
        <input type="text" className='form-create' placeholder='agrega el título' name='title'/>

        <label htmlFor="description">Descripción</label>
        <input type="description" className='form-create' placeholder='agrega la descripción' name='description'/>

        <label htmlFor="date_event">Fecha del evento</label>
        <input type="date" className='form-create' name='date_event'/>

        <label htmlFor="start_time">Hora de inicio</label>
        <input type="time" className='form-create' name='start_time'/>

        <label htmlFor="end_time">Hora de término</label>
        <input type="time" className='form-create' name='end_time'/>

        <label htmlFor="location">Ubicación</label>
        <input type="location" className='form-create' placeholder='agrega la ubicación' name='location'/>

        <button type="submit" className="btn-form-create-event">Registar evento</button>

        <Link className="btn-cancel-form-create-event" to="/">Cancelar</Link>
      </form>
    </div>
  )
}

export default CreateEvent
