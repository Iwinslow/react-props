
function Card(props) {
    console.log("CARD PROPS" ,props)
  return (
    <div className="card">
        <div className="card__imgContainer">
            <img src="" alt="moviePoster" />
        </div>
        <div className="card__info">
            <span className="card__info--rating"></span>
            <span className="card__info--title"></span>
        </div>
    </div>
  )
}

export default Card