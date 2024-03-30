import React, {useEffect} from 'react'

import FilterByCategori from './FilterByCategori';
import AllCategories from './AllCategories';

const Products = ({ filterProducts }) => {
    
  return (
    <div className='w-full'>
      {
        filterProducts ? (
          <FilterByCategori categorie={filterProducts} />
        ) : (
          <AllCategories/>
        )
      }
    </div>
  )
}

export default Products
