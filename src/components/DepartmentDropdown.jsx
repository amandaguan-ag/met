import { useState, useEffect } from "react";
import { fetchDepartments } from "../api/metAPI";
import "../css/DepartmentDropdown.css";

function DepartmentDropdown({ onChange }) {
  const [departments, setDepartments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchDepartments().then(setDepartments);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDepartmentClick = (departmentId) => {
    onChange(departmentId);
    setIsOpen(false);
  };

  return (
    <div className="dropdown toggle">
      <input
        id="departmentToggle"
        type="checkbox"
        checked={isOpen}
        onChange={handleToggle}
      />
      <label htmlFor="departmentToggle">Select a Department</label>
      <ul>
        {departments.map((dept) => (
          <li key={dept.departmentId}>
            <a
              href="#"
              onClick={() => handleDepartmentClick(dept.departmentId)}
            >
              {dept.displayName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentDropdown;
