import { useState, useEffect } from "react";
import "./App.css";
import DepartmentDropdown from "./components/DepartmentDropdown";
import { fetchDepartments } from "./api/metAPI";

function App() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

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
  };

  return (
    <>
      <h1>Explore Artworks at the Met Museum</h1>
      <DepartmentDropdown onChange={handleDepartmentChange} />
    </>
  );
}

export default App;
