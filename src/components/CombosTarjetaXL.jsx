import React from 'react'

import kiosco from "../../kiosco.json"


const CombosTarjetaXL = () => {


  return (
    <div className='flex justify-evenly w-full gap-2 px-2'>
      {
        kiosco[0].combos.map(e => (
            <article key={e.id} className='bg-orange-500 p-5 w-1/3 rounded-md shadow-button flex flex-col gap-4'>

                <div className='py-2 flex '>
                    <h2 className='text-white text-4xl poppins-extrabold-italic text-balance'>
                        Combo <span className=' '>0{e.id}</span>
                    </h2>
                </div>
                
                
                <ul className='flex flex-col gap-2 text-white poppins-semibold-italic  text-xl '>
                    <li>. {e.item_1}</li>
                    <li>. {e.item_2}</li>
                    <li>. {e.item_3}</li>
                </ul>
                
                <div className='flex gap-3'>
                    <p className='text-white poppins-extrabold-italic text-5xl'>${e.precio}</p>

                </div>
                
            </article>
        ))
      }
    </div>
  )
}

export default CombosTarjetaXL
