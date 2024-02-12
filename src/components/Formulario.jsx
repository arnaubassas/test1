import { useState } from 'react'

const Form = ({ handleSubmit, handleChange, tarea }) => {

    return (
        <>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <div className='text-xl my-4 '>
                        <label className='mr-3' htmlFor="tasca">Tasca:</label>
                        <input className='border' type="text" id="tasca" name="tasca" value={tarea.tasca} onChange={handleChange} />
                    </div>
                    <div className='text-xl mb-4'>
                        <label className='text-xl mb-4 mr-3' htmlFor="tasca">Categoria: </label>
                        <select id="categoria" name="categoria" value={tarea.categoria} onChange={handleChange}>
                            <option value=""></option>
                            <option value="trabajo">Trabajo</option>
                            <option value="personal">Personal</option>
                            <option value="urgente">Urgente</option>
                            <option value="familia">Familia</option>
                        </select>
                    </div>
                    <button className='text-xl bg-blue-300 px-3 rounded border-blue-500' type='submit'>Enviar</button>
                </form>
            </div>
        </>
    );
}

export default Form;