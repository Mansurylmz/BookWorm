import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='d-flex align-items-center justify-content-between p-3 bg-body-tertiary'>
        <Link to={"/"} className='fs-5 text-danger fw-bold '>Kitap Kurdu</Link>
        <div className='d-flex align-items-center justify-content-between gap-5 m-2'>
            <NavLink to="/" >Anasayfa</NavLink>
            <NavLink to={"ürünler"}>Ürünler</NavLink>
            <NavLink to={"kategori"}>Kategori</NavLink>
        </div>
    </header>
  )
}

export default Header