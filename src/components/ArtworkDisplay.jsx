function ArtworkDisplay({ artworks }) {
  const sortedArtworks = [...artworks].sort(
    (a, b) => a.objectBeginDate - b.objectBeginDate
  );

  return (
    <div className="container">
      <div className="row">
        {sortedArtworks.map((art) => (
          <div key={art.objectID} className="col-md-4 mb-4">
            <div className="card bg-white text-dark">
              <img
                src={art.primaryImageSmall}
                alt={art.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{art.title}</h5>
                <p className="card-text">
                  {art.artistDisplayName || "Unknown Artist"}
                </p>
                <p className="card-text">Year: {art.objectBeginDate}</p>
                <a
                  href={`https://www.metmuseum.org/art/collection/search/${art.objectID}`}
                  className="btn btn-dark"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtworkDisplay;
