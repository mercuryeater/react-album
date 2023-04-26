import "./Album.css";

function Album({ cover, song, artist, year, genre }) {
  return (
    <div>
      <div className="card">
        <div className="card__cover">
          <img src={cover} alt="" className="card__cover__img" />
        </div>
        <div className="card__info">
          <div className="card__info__text">
            <div className="card__info__text__artist">
              <h2>{artist}</h2>
            </div>
            <div className="card__info__text__about">
              <h3 className="card__info__text__about__song">{song}</h3>
              <h4 className="card__info__text__about__year">({year})</h4>
            </div>
            <div className="card__info__text__genre">
              <h4>{genre}</h4>
            </div>
          </div>
          <div className="card__info__like">
            <ion-icon
              className="card__info__like"
              name="heart-outline"
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Album;
