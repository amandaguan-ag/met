import { useState, useEffect } from "react";
import "./App.css";
import DepartmentDropdown from "./components/DepartmentDropdown";
import { fetchDepartments, fetchArtworks } from "./api/metAPI";
import ArtworkDisplay from "./components/ArtworkDisplay";

function App() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    async function loadDepartments() {
      const deps = await fetchDepartments();
      console.log("Departments loaded:", deps);
      setDepartments(deps);
    }
    loadDepartments();
  }, []);

  const handleDepartmentChange = async (departmentId) => {
    console.log("Department selected:", departmentId);
    setSelectedDepartment(departmentId);
    const arts = await fetchArtworks(departmentId);
    console.log("Artworks fetched:", arts);
    setArtworks(arts);
  };

  return (
    <>
      <h1>Explore Artworks at the Met Museum</h1>
      <DepartmentDropdown onChange={handleDepartmentChange} />
      <ArtworkDisplay artworks={artworks} />
    </>
  );
}

export default App;
