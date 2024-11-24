import React from "react";
import Image from "next/image";
import checkmark from "../assets/icons/chk.svg";

const ListItem = ({ icon, title, description, className }) => {
  return (
    <li className={`flex mb-7 items-center ${className}`}>
      <div className="mr-3">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <div className="flex items-center">
        <h3 className="text-lg m-0 p-0 leading-none">{title}</h3>
        {/* <p className="text-sm text-gray-600 leading-1 mt-1 ">{description}</p> */}
        <div className="ml-3">
          <Image src={checkmark} alt="check" height={15} />{" "}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
