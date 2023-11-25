import React from 'react'
import { Link } from 'react-router-dom'

const CreateEvent = () => {
  return (
    <div className='form-create-event'>
      <form>
        <h2>Crear evento</h2>
        <label htmlFor="title">Titulo</label>
        <input type="text" className='form-create' placeholder='agrega el titulo' name='title'/>
        <button type="submit" className="btn-form-create-event">Registar evento</button>
        <Link className="btn-cancel-form-create-event" to="/">Cancelar</Link>
      </form>
    </div>
  )
}

export default CreateEvent
