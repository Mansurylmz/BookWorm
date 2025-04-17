import React from 'react'

const Info = ({title,book}) => {
  return (
   
      <p className='fs-5' >
        <span className='badge bg-danger me-3'>{title}</span>  
        <span>{book}</span>
        
      </p>
   
  )
}

export default Info