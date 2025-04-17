import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import axios from 'axios'
import Card from './Card'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Product = () => {

  const [books,setBooks]=useState([])
  const [searchParams]= useSearchParams()
  
  

  useEffect(() => {
    // url deki parametrelere erişip bunları api'a gönder
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
     
    };

    // Bileşen ekrana geldiğinde api'a istek at
    axios
      .get("http://localhost:3000/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err)=>(console.log(err)))
    
  }, [searchParams]);
  


  return (
    <div className='container p-5'>
      <h3 className='m-4'>{(books.length>0) ? (`${books.length} adet kitap bulundu`) : "Kitap Bulunamadı"}</h3>
      <Filter/>
      <div className="cards-container mt-5">
        {
          books?.map((book)=>(
            <Card key={book.id} books={book}/>
          ))
        }
      </div>
    </div>
  )
}

export default Product