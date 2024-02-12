import { useState } from 'react'

const Lista = ({ tasca, categoria, setListaTareas, index, listaTareas }) => {

    function eliminaTarea(key) {
        const nuevaListaTareas = listaTareas.filter((e, i) => key !== i);
        setListaTareas(nuevaListaTareas);
    }

    if (categoria === "trabajo") {
        return (
            <>
                <div className='flex justify-center bg-blue-800 rounded ml-8 justify-between px-5 py-2'>
                    <div className='text-l'>
                        {tasca}
                    </div>
                    <button className='border-2 border-black mx-2 px-2 rounded-full text-white bg-black' onClick={(e) => eliminaTarea(index)}>x</button>
                </div>
            </>
        );
    }
    if (categoria === "personal") {
        return (
            <>
                <div className='flex justify-center my-3 bg-green-800 rounded ml-8 justify-between px-5 py-2'>
                    <div className='text-l'>
                        {tasca}
                    </div>
                    <button className='border-2 border-black mx-2 px-2 rounded-full text-white bg-black' onClick={() => eliminaTarea(index)}>x</button>
                </div >
            </>
        );
    }
    if (categoria === "urgente") {
        return (
            <>
                <div className='flex justify-center my-3 bg-red-800 rounded ml-8 justify-between px-5 py-2'>
                    <div className='text-l'>
                        {tasca}
                    </div>
                    <button className='border-2 border-black mx-2 px-2 rounded-full text-white bg-black' onClick={() => eliminaTarea(index)}>x</button>
                </div >
            </>
        );
    }
    if (categoria === "familia") {
        return (
            <>
                <div className='flex justify-center my-3 bg-orange-500 rounded ml-8 justify-between px-5 py-2'>
                    <div className='text-l'>
                        {tasca}
                    </div>
                    <button className='border-2 border-black mx-2 px-2 rounded-full text-white bg-black' onClick={() => eliminaTarea(index)}>x</button>
                </div>
            </>
        );
    }
}

export default Lista;