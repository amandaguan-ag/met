const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export async function fetchDepartments() {
  const response = await fetch(`${BASE_URL}/departments`);
  if (!response.ok) throw new Error("Failed to fetch departments");
  const data = await response.json();
  return data.departments;
}

export async function fetchArtworks(departmentId) {
  const url = `${BASE_URL}/search?departmentId=${departmentId}&isHighlight=true&hasImages=true&q=*`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch artworks");
  const data = await response.json();
  console.log("Object IDs fetched:", data.objectIDs);

  const allDetails = await Promise.all(data.objectIDs.map(fetchArtworkDetails));

  const validArtworks = allDetails.filter(
    (art) => art && art.primaryImageSmall && art.isHighlight
  );
  console.log("Details of artworks fetched:", validArtworks);

  shuffleArray(validArtworks);

  return validArtworks.slice(0, 5);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export async function fetchArtworkDetails(objectID) {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );
  if (!response.ok) return null; 
  const data = await response.json();
  return data;
}
