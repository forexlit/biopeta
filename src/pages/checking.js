import { Navigation } from "@/views/Navigation";
import React, { useState, useEffect } from "react";

const Checking = () => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          window.location.href = "/sorry";
          return 100;
        }
      });
    }, 50); // Adjust the speed by changing the interval (50ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mb-10 flex items-center justify-center">
        <Navigation />
      </div>
      <h3 className="text-center font-semibold text-2xl mb-3">
        Checking availability...
      </h3>
      <div
        className="rounded-lg"
        style={{ width: "100%", backgroundColor: "#fff" }}
      >
        <div
          className=" bg-pink-600 px-5 rounded-lg"
          style={{
            width: `${loading}%`,
            transition: "width 0.1s ease",
          }}
        >
          <span className="text-sm text-white">{loading}%</span>
        </div>
      </div>
    </div>
  );
};

export default Checking;
