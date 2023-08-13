import Data from "@/shared/Data";
import Image from "next/image";
import { useState } from "react";

function CategoryList({ onCategoryChange }) {
  const [categoryList, setCategoryList] = useState(Data.CategoryListData);
  const [slectedCategoy, setSelectedCategoy] = useState();

  return (
    <div>
      <h2 className="px-2 font-bold">Select Food Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-centent m-2 p-2 bg-gray-100 rounded-lg cursor-pointer grayscale hover:grayscale-0  ${
              slectedCategoy === index
                ? "grayscale-0 border-[2px] border-purple-400"
                : "border-[2px] border-transparent"
            }`}
            onClick={() => {
              setSelectedCategoy(index);
              onCategoryChange(item.value);
            }}
          >
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            <span className="text-xs xl:text-base">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
