import { useState } from 'react'
import './App.css'
import Form from './components/Formulario';
import Lista from './components/Lista';

function App() {
  const [listaTareas, setListaTareas] = useState([{
    tasca: "",
    categoria: ""
  }])
  const [tarea, setTarea] = useState({ tasca: "", categoria: "" })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTarea({
      ...tarea,
      [name]: value
    });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTarea({ tasca: "", categoria: "" });
  };

  return (
    <>
      <h1 className='text-5xl text-center border-b-4 border-black '>Lista de tareas</h1>
      <div className='mt-16 flex justify-center'>
        <div className='w-5/6 flex mx-16 justify-center'>
          <div className='w-1/3'>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} tarea={tarea} />
          </div>
          <div className='w-1/3 border-l-4 border-black '>
            <p className='ml-8 text-xl mb-4'>Tasques</p>
            {listaTareas.map((e, i) => <Lista tasca={e.tasca} categoria={e.categoria} setListaTareas={setListaTareas} index={i} listaTareas={listaTareas} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
