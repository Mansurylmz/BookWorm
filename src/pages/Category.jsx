import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Category = () => {
  return (
    <div className='d-flex gap-3 p-5 '>
     <aside className='d-flex flex-column bg-white p-5 rounded-4'>
     <NavLink to={"/kategori/hikaye"}>Hikaye</NavLink>
     <NavLink to={"/kategori/roman"}>Roman</NavLink>
     </aside>
    <Outlet/>
    </div>
  )
}

export default Category