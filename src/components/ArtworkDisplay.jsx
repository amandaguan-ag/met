function ArtworkDisplay({ artworks }) {
  return (
    <div>
      {artworks.map((art) => (
        <div key={art.objectID}>
          <h3>{art.title}</h3>
          <p>{art.artistDisplayName || "Unknown Artist"}</p>
          <img src={art.primaryImageSmall} alt={art.title} />
          <p>Year: {art.objectBeginDate}</p>
          <a
            href={`https://www.metmuseum.org/art/collection/search/${art.objectID}`}
          >
            View More
          </a>
        </div>
      ))}
    </div>
  );
}

export default ArtworkDisplay;
