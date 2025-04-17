import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="mt-5 d-flex flex-column align-items-center justify-content-center notfound">
      <h1 className="mb-5 text-warning">Aratılan Sayfa Bulunamadı</h1>
      <img  className="img-fluid rounded not-img" src="./notFound.gif" alt="" />
      <Link to={"/"} >Anasayfaya Dönmek İçin Tıklayınız</Link>
        
    
    </div>
  )
}

export default NotFound