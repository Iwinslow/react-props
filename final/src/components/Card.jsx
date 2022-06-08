
function Card({data}) {
  return (
    <div className="card">
        <div className="card__imgContainer">
            <img src={data.poster_path} alt="moviePoster" />
        </div>
        <div className="card__info">
            <span className="card__info--rating">{data.vote_average}</span>
            <span className="card__info--title">{data.title}</span>
        </div>
    </div>
  )
}

export default Card