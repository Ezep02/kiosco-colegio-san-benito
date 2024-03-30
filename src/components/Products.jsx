import React, {useEffect} from 'react'

import FilterByCategori from './FilterByCategori';


const Products = ({ filterProducts }) => {
  

  return (
    <div className='w-full'>
      {
        filterProducts && (
            <FilterByCategori categorie={filterProducts} />
        )
      }
    </div>
  )
}

export default Products
