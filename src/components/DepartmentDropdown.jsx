import { useState, useEffect } from "react";
import { fetchDepartments } from "../api/metAPI";

function DepartmentDropdown({ onChange }) {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments().then(setDepartments);
  }, []);

  return (
    <select onChange={(e) => onChange(e.target.value)} defaultValue="">
      <option value="" disabled>
        Select a Department
      </option>
      {departments.map((dept) => (
        <option key={dept.departmentId} value={dept.departmentId}>
          {dept.displayName}
        </option>
      ))}
    </select>
  );
}

export default DepartmentDropdown;
