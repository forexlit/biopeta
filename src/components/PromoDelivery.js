// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import shipping from "../assets/icons/shipping.svg";

// const PromoDelivery = () => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup on unmount
//   }, []);

//   function calculateTimeLeft() {
//     // Define the countdown time limit (e.g., 15 minutes 40 seconds)
//     const endTime = new Date();
//     endTime.setMinutes(endTime.getMinutes() + 15); // You can adjust this for the desired duration
//     endTime.setSeconds(endTime.getSeconds() + 40);

//     const currentTime = new Date();
//     const difference = endTime - currentTime;

//     let timeLeft = {};
//     if (difference > 0) {
//       timeLeft = {
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       timeLeft = {
//         minutes: 0,
//         seconds: 0,
//       };
//     }

//     return timeLeft;
//   }

//   return (
//     <>
//       <div className="bg-[#e488a2] p-3  rounded text-white relative overflow-hidden z-[10]">
//         <div className="flex items-center">
//           <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white flex items-center justify-center">
//             <Image src={shipping} alt="Free shipping" height={25} width={25} />
//           </div>
//           <span className="block ml-5 text-md md:text-lg">
//             <strong> Order now</strong> and get it delivered for free!{" "}
//           </span>
//           {/* <p className="text-2xl flex">
//             <span>{timeLeft.minutes}</span>
//             <span>:</span> <span>{timeLeft.seconds}</span>
//           </p> */}
//           <p className="text-2xl">
//             {`${String(timeLeft.minutes).padStart(2, "0")}:${String(
//               timeLeft.seconds
//             ).padStart(2, "0")}`}
//           </p>
//         </div>
//       </div>
//       <div className=" flex items-center justify-center z-[-1]">
//         <div className="bg-[#e488a2] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]">
//           test
//         </div>
//       </div>
//     </>
//   );
// };

// export default PromoDelivery;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import shipping from "../assets/icons/shipping.svg";

const PromoDelivery = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const updatedSeconds = prevTime.seconds - 1;
        const updatedMinutes =
          updatedSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;

        if (updatedMinutes < 0) {
          clearInterval(timer); // Stop the timer when time runs out
          return { minutes: 0, seconds: 0 };
        }

        return {
          minutes: updatedMinutes,
          seconds: updatedSeconds < 0 ? 59 : updatedSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="bg-[#e488a2] p-3 rounded text-white relative overflow-hidden z-[10]">
        <div className="flex items-center">
          <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white flex items-center justify-center">
            <Image src={shipping} alt="Free shipping" height={25} width={25} />
          </div>
          <span className="block ml-5 text-md md:text-lg">
            <strong> Order now</strong> and get it delivered for free!{" "}
          </span>
          <p className="text-2xl ml-5">
            {`${String(timeLeft.minutes).padStart(2, "0")}:${String(
              timeLeft.seconds
            ).padStart(2, "0")}`}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center z-[-1]">
        <div className="bg-[#e488a2] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
      </div>
    </>
  );
};

export default PromoDelivery;
