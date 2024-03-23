import React from 'react'

const Spinner = ({text}) => {
    const length = text.length;
    const deg = 360 / length;
  
  return (
    <div className="sppining-wrapper">

      <div className="sppining-text" >
          <p className="">{text.split("").map((letra, i)=> (
            <span key={i}
              style={{
                transform: `rotate(${deg * i}deg)`
              }}
            >
              {letra}
            </span>
           ))}
          </p>
         

        </div>

        {/* <div className=''>
            <div className='flex justify-center'>
              <div className=''>
                <h2 className='spinner-inner-text'>I</h2>
              </div>
              
              <div>
                <h2 className='spinner-inner-text'>S</h2>
              </div>
            </div>
            
            <div className='flex justify-center'>
                <div className=''>
                    <h2 className='spinner-inner-text'>B</h2>
                </div>
                
                <div className=''>
                    <h2 className='spinner-inner-text'>N</h2>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Spinner
