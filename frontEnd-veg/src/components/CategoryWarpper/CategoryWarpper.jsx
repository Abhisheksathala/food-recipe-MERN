import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ name, href, backgroundColor, Color }) => {
  const style = {
    backgroundColor: backgroundColor,
    color: Color,
  };
  return (
    <div className="CategoryItem">
      <Link to={href} className="rounded-full">
        <div
          className="uppercase px-6 py-2 text-center rounded-full"
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
};

const categories = [
  {
    name: "entrees",
    href: "/categories/entrees",
    backgroundColor: "#f0f5c4",
    color: "#59871f",
  },
  {
    name: "breakfast",
    href: "/categories/breakfast",
    backgroundColor: "#efedfa",
    color: "#3cc3a8f",
  },
  {
    name: "lunch",
    href: "/categories/lunch",
    backgroundColor: "#e5f7f3",
    color: "#1f8787",
  },
  {
    name: "desserts",
    href: "/categories/desserts",
    backgroundColor: "#e8f5fa",
    color: "#397a9e",
  },
  {
    name: "sides",
    href: "/categories/sides",
    backgroundColor: "#feefc9",
    color: "#d16400",
  },
  {
    name: "drinks",
    href: "/categories/drinks",
    backgroundColor: "#fffea3",
    color: "#f0493e",
  },
];
const CategoryList = () => {
  return (
    <div className="CategoryList flex items-center justify-center gap-8">
      {categories.map((category) => (
        <CategoryItem
          key={category.name}
          name={category.name}
          href={category.href}
          backgroundColor={category.backgroundColor}
          color={category.color}
        />
      ))}
    </div>
  );
};

const CategoryWarpper = () => {
  return (
    <div className="CategoryWarpper">
      <CategoryList />
    </div>
  );
};

export default CategoryWarpper;
