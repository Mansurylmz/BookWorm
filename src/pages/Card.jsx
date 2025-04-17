import { Link } from "react-router-dom"
const Card=(props)=>{

    return(
        <div className="card shadow p-2">
            <img src={props.books?.image} alt="" className="rounded img-fluid" />
            <div className="card-body">
                <h4>{props.books?.title}</h4>
                <h4>{props.books?.author}</h4>
            </div>
            <Link to={`/detail/${props.books.id}`} className="btn btn-primary">Detayları Gör</Link>
        </div>
    )
}
export default Card