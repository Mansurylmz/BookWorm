import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'

const Detail = () => {
  const {id}=useParams()
  const [book,setBook]=useState([])
  
  useEffect(()=>{
    axios.get(`http://localhost:3000/books/${id}`)
    .then((res)=>setBook(res.data))
  },[])
  return (
    <div className='row my-5 p-5 mx-auto container'>
      <div className='col-md-6 d-flex justify-content-center align-items-center'>
        <img src={book.image} className='rounded img-fluid' alt="" />
      </div>
      <div className='col-md-6 d-flex flex-column gap-2 mt-5 my-4'>
        <h1 className='mb-4'>{book?.title}</h1>

      <div>
        <Info title="Yazar" book={book?.author}/>
        <Info title="Yıl" book={book?.year}/>
        <Info title="Sayfa Sayısı" book={book?.page}/>
        <Info title="Ücret" book={book?.price}/>
        <Info title="Açıklama" book={book?.description}/>
      </div>
      </div>
     
    </div>
  )
}

export default Detail