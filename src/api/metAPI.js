const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export async function fetchDepartments() {
  const response = await fetch(`${BASE_URL}/departments`);
  if (!response.ok) throw new Error("Failed to fetch departments");
  const data = await response.json();
  return data.departments;
}
