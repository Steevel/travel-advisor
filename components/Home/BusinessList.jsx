import { useContext, useRef } from "react";
import BusinessItem from "./BusinessItem";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

function BusinessList({ businessList }) {
  const elementRef = useRef(null);
  const { setSelectedBusiness } = useContext(SelectedBusinessContext);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        onClick={() => slideLeft(elementRef.current)}
        strokeWidth={2.5}
        stroke="currentColor"
        className="z-50 w-8 h-8 absolute rotate-180 top-[35%]
            bg-purple-400  cursor-pointer p-1 rounded-full text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <div
        className="flex gap-4 overflow-scroll overflow-x-auto scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {businessList.map((item, index) => (
          <div key={index} onClick={() => setSelectedBusiness(item)}>
            <BusinessItem business={item} />
          </div>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => slideRight(elementRef.current)}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-8 h-8 absolute right-0 top-[35%]
        bg-purple-400 cursor-pointer p-1 rounded-full text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

export default BusinessList;
