import { useState } from "react";
import { Link } from "react-router-dom";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      id: "cufas",
      name: "Cufa's",
    },
    {
      id: "rest",
      name: "Rest",
    },
  ];

  return (
    <div className="dropDownContainer">
      <a onClick={() => setIsOpen(!isOpen)}>Categories</a>
      {isOpen ? (
        <ul className="dropDownMenu">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
