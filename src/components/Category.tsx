import React, { useState } from "react";
import categoriesData from "@/data/categories.json";

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (value: string) => {
    setSelectedCategories(
      (prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((category) => category !== value) // Deselect
          : [...prevSelected, value] // Select
    );
  };
  return (
    <div>
      <div className="flex flex-wrap gap-2 mt-5">
        {categoriesData.categories.map((category) => (
          <button
            key={category.value}
            onClick={() => toggleCategory(category.value)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategories.includes(category.value)
                ? "bg-[#fdc500] border-[#fdc500] text-white "
                : "bg-white text-[#00509d] border-[#00509d]"
            } transition duration-200 ease-in-out`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
