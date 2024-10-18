import React from "react";
import { FaBookmark, FaShare } from "react-icons/fa";
function ActionButtons() {
  return (
    <>
      <button className="flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
        <FaBookmark className="mr-2 inline" />
        Bookmark Property
      </button>
      <button className="flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600">
        <FaShare className="mr-2 inline" /> Share Property
      </button>
    </>
  );
}

export default ActionButtons;
