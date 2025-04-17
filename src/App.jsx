import Home from "./pages/Home"
import Product from "./pages/Product"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Category from "./pages/Category"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Detail from "./pages/Detail"
function App() {


  return (
    <>
     <BrowserRouter>
   <div className="page">
   <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="kategori" element={<Category/>}>
              <Route path="hikaye" element={ <h1>hikaye sayfası</h1> } />
              <Route path="roman" element={ <h1>roman sayfası</h1> }/>
          </Route>
          <Route path="ürünler" element={<Product/>} />
          <Route path="detail/:id" element={<Detail/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
   </div>
     </BrowserRouter>
    </>
  )
}

export default App
