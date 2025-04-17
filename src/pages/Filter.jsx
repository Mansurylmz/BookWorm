import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Filter = () => {

    const [searchParams,setSearchParams]=useSearchParams()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const text=e.target[0].value
        searchParams.set("search",text)
        setSearchParams(searchParams)
        
    }
    const handleChange=(e)=>{
        const text=(e.target.value)
        searchParams.set("sort",text)
        setSearchParams(searchParams)
        
    }
  

  return (
    <div className='d-flex align-items-center justify-content-between gap-5 mt-5'>
        <div>
            <select onChange={handleChange} className='form-select' defaultValue="option1">
                <option  value="">sırala</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
            </select>
        </div>
        <div className='d-flex '>
            <form onSubmit={handleSubmit} className='d-flex align-items-center justify-content-between gap-2' >
                <input type="text" placeholder='Kitap ismi giriniz' className='form-control' />
                <button className='btn btn-primary' type='submit'>Ara</button>
            </form>
        </div>
    </div>
  )
}

export default Filter