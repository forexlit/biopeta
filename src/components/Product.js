// import React, { useState } from "react";
// import Image from "next/image";
// import { Button } from "./Button";
// import chk from "../assets/icons/chk.svg";
// import security from "../assets/icons/security.png";

// const Product = ({ product }) => {
//   const [selectedOption, setSelectedOption] = useState(product.options[0]);
//   return (
//     <div className="col-span-12 md:col-span-4 lg:col-span-4 mb-5">
//       <div
//         className={`p-5 rounded-md relative border border-2 ${
//           product.popular ? " border-yellow-500 bg-[#fffae8]" : "bg-white"
//         } ${product.id === 2 && "border-green-500"} `}
//       >
//         <div
//           className={`absolute ${product.id === 1 && "bg-yellow-400"} ${
//             product.id === 2 && "bg-green-400"
//           } ${product.id === 3 && ""}
//           } top-[-18px] left-[50%] transform -translate-x-[50%] px-5 py-1 rounded font-semibold uppercase whitespace-nowrap`}
//         >
//           {product.badge}
//         </div>
//         <div className="text-center">
//           <h3 className="text-2xl font-semibold mt-5">{product.title}</h3>
//           <h4 className="text-md pb-5 leading-none">{product.subtitle}</h4>
//         </div>
//         <div className="relative">
//           <Image
//             src={selectedOption.image}
//             className="mx-auto"
//             height={300}
//             width={300}
//             alt="Product"
//           />
//         </div>
//         <div className="mt-5">
//           {selectedOption.oldPrice !== selectedOption.price && (
//             <span className="bg-red-500 text-white px-3 rounded font-semibold">
//               -
//               {(
//                 ((selectedOption.oldPrice - selectedOption.price) /
//                   selectedOption.oldPrice) *
//                 100
//               ).toFixed()}
//               %
//             </span>
//           )}
//         </div>
//         <div className="flex items-end">
//           <span
//             className={`text-xl mr-1 font-semibold ${
//               selectedOption.oldPrice !== selectedOption.price
//                 ? "text-red-500"
//                 : ""
//             }`}
//           >
//             $
//           </span>
//           {selectedOption.price && (
//             <>
//               <h3
//                 className={`text-4xl font-semibold ${
//                   selectedOption.oldPrice !== selectedOption.price
//                     ? "text-red-600"
//                     : ""
//                 }`}
//               >
//                 {selectedOption.price}
//               </h3>
//               {selectedOption.oldPrice !== selectedOption.price && (
//                 <span className="text-gray-500 ml-2 line-through">
//                   ${selectedOption.oldPrice}
//                 </span>
//               )}
//             </>
//           )}

//           <span className="text-gray-500 ml-2">/ per bottle</span>
//         </div>
//         {selectedOption.priceWeight && (
//           <>
//             <div className="flex items-end text-pink-600">
//               <span className="text-3xl pr-3">+</span>
//               <span className="text-xl mr-1 font-semibold ">$</span>
//               {selectedOption.priceWeight && (
//                 <>
//                   <h3 className="text-3xl font-semibold ">
//                     {selectedOption.priceWeight}
//                   </h3>
//                   {selectedOption.oldPriceWeight !==
//                     selectedOption.priceWeight && (
//                     <span className="text-gray-500 ml-2 line-through">
//                       ${selectedOption.oldPriceWeight}
//                     </span>
//                   )}
//                 </>
//               )}
//               <span className="text-gray-500 ml-2">/ per bottle</span>
//             </div>
//           </>
//         )}
//         <ul className="my-3">
//           {selectedOption.list.map((item) => (
//             <li key={item.title} className="flex items-center">
//               <Image
//                 src={chk}
//                 alt="check"
//                 width={18}
//                 height={18}
//                 className="mr-2"
//               />
//               <span>{item.title}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="text-xl mb-4">
//           Total:
//           {selectedOption.oldTotal && (
//             <span className="line-through text-gray-500 text-sm ml-2">
//               $ {selectedOption.oldTotal}{" "}
//             </span>
//           )}{" "}
//           $ <strong>{selectedOption.total}</strong>
//         </div>
//         {selectedOption.orderUrl && (
//           <Button
//             full={true}
//             onClick={() => window.open(selectedOption.orderUrl)}
//             id="initiate-checkout"
//             bg="#db2877"
//             type="buy"
//           >
//             Buy now
//           </Button>
//         )}
//         <div className="text-center mt-2">One-time payment. Free shipping.</div>
//         <div className="flex items-center justify-center mt-5">
//           <Image src={security} alt="Security" height={25} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import chk from "../assets/icons/chk.svg";
import security from "../assets/icons/security.png";
import gift from "../assets/icons/gift.png";

const Product = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  return (
    <div className="col-span-12 lg:col-span-4 mb-5">
      <div
        className={`p-5 rounded-md relative border border-2 ${
          product.popular ? " border-yellow-500 bg-[#fffae8]" : "bg-white"
        } ${product.id === 2 && "border-green-500"} `}
      >
        <div
          className={`absolute ${product.id === 1 && "bg-yellow-400"} ${
            product.id === 2 && "bg-green-400"
          } ${product.id === 3 && ""}
          } top-[-18px] left-[50%] transform -translate-x-[50%] px-5 py-1 rounded font-semibold uppercase whitespace-nowrap`}
        >
          {product.badge}
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6 lg:col-span-12">
            <div>
              <Image
                src={selectedOption.image}
                className="mx-auto"
                height={200}
                width={200}
                alt="Product"
              />
            </div>
          </div>
          <div className="col-span-6 lg:col-span-12">
            <div className="text-left md:text-center">
              <h3 className="text-md md:text-2xl font-semibold mt-0 md:mt-5 leading-none mb-2">
                {product.title}
              </h3>
              <h4 className="text-sm md:text-md text-gray-500 pb-5 leading-none">
                {product.subtitle}
              </h4>
            </div>
            <div className="mt-0">
              {selectedOption.oldPrice !== selectedOption.price && (
                <span className="text-sm bg-red-500 text-white px-2 md:px-3 rounded font-semibold">
                  -
                  {(
                    ((selectedOption.oldPrice - selectedOption.price) /
                      selectedOption.oldPrice) *
                    100
                  ).toFixed()}
                  %
                </span>
              )}
            </div>
            <>
              <div className="flex items-end">
                <span
                  className={`text-lg md:text-xl mr-1 font-semibold ${
                    selectedOption.oldPrice !== selectedOption.price
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  $
                </span>
                {selectedOption.price && (
                  <>
                    <h3
                      className={`text-2xl md:text-4xl font-semibold ${
                        selectedOption.oldPrice !== selectedOption.price
                          ? "text-red-600"
                          : ""
                      }`}
                    >
                      {selectedOption.price}
                    </h3>
                    {selectedOption.oldPrice !== selectedOption.price && (
                      <span className="text-sm md:text-md text-gray-500 ml-2 line-through">
                        ${selectedOption.oldPrice}
                      </span>
                    )}
                  </>
                )}
              </div>
            </>

            {selectedOption.priceWeight && (
              <>
                <div className="flex items-end text-pink-600">
                  <span className="text-3xl pr-3">+</span>
                  <span className="text-xl mr-1 font-semibold ">$</span>
                  {selectedOption.priceWeight && (
                    <>
                      <h3 className="text-3xl font-semibold ">
                        {selectedOption.priceWeight}
                      </h3>
                      {selectedOption.oldPriceWeight !==
                        selectedOption.priceWeight && (
                        <span className="text-gray-500 ml-2 line-through">
                          ${selectedOption.oldPriceWeight}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </>
            )}
            <ul className="my-3">
              {selectedOption.list.map((item) => (
                <li key={item.title} className="flex items-center">
                  <Image
                    src={chk}
                    alt="check"
                    width={18}
                    height={18}
                    className="mr-2"
                  />
                  <span className="text-xs md:text-[16px]">{item.title}</span>
                </li>
              ))}
            </ul>
            {product.gift && (
              <div className="flex items-center mt-0 md:mt-2 flex-col md:flex-row mb-5">
                <div className="text-xl mr-2">+</div>
                <div className="border border-red-400 bg-red-50 text-xs p-1 font-semibold flex items-cetner">
                  <div className="mr-2">
                    <Image src={gift} alt="gift" height={15} />{" "}
                  </div>
                  FREE Gift
                </div>
              </div>
            )}
            {/* <div className="text-xl mb-4">
              Total:
              {selectedOption.oldTotal && (
                <span className="line-through text-gray-500 text-sm ml-2">
                  $ {selectedOption.oldTotal}{" "}
                </span>
              )}{" "}
              $ <strong>{selectedOption.total}</strong>
            </div> */}
          </div>
        </div>

        {selectedOption.orderUrl && (
          <Button
            full={true}
            onClick={() => window.open(selectedOption.orderUrl)}
            id="initiate-checkout"
            type="buy"
          >
            Buy now
          </Button>
        )}
        <div className="text-sm md:text-md text-center mt-2">
          One-time payment. Free shipping.
        </div>
        <div className="flex items-center justify-center mt-5">
          <Image src={security} alt="Security" height={25} />
        </div>
      </div>
    </div>
  );
};

export default Product;
