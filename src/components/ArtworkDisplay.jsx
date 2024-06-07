function ArtworkDisplay({ artworks, onShuffle }) {
  const sortedArtworks = [...artworks].sort(
    (a, b) => a.objectBeginDate - b.objectBeginDate
  );

  return (
    <div className="container">
      <div className="mb-3 mt-4">
        <button className="btn btn-dark" onClick={onShuffle}>
          Shuffle Artworks
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {sortedArtworks.map((art) => (
          <div key={art.objectID} className="col">
            <div className="card h-100 bg-white text-dark">
              <img
                src={art.primaryImageSmall}
                alt={art.title}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{art.title}</h5>
                <p className="card-text">
                  {art.artistDisplayName || "Unknown Artist"}
                </p>
                <p className="card-text">Year: {art.objectBeginDate}</p>
                <div className="mt-auto">
                  <a
                    href={`https://www.metmuseum.org/art/collection/search/${art.objectID}`}
                    className="btn btn-dark"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtworkDisplay;
