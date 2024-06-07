import { useState, useEffect } from "react";
import { fetchDepartments } from "../api/metAPI";

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
    <div className="dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        id="departmentDropdown"
        data-bs-toggle="dropdown"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        Select a Department
      </button>
      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {departments.map((dept) => (
          <li key={dept.departmentId}>
            <a
              className="dropdown-item"
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
