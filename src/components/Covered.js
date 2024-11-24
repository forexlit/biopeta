import React from "react";
import Image from "next/image";
import business from "../assets/icons/covered/business-2x.png";
import cosmo from "../assets/icons/covered/cosmo-2x.png";
import harvard from "../assets/icons/covered/harvard.png";
import health from "../assets/icons/covered/health-2x.png";
import ny from "../assets/icons/covered/ny-2x.png";

const Covered = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          <Image src={business} alt="Business Insider" height={70} />
          <Image src={cosmo} alt="Cosmopolitan" height={70} />
          <Image src={harvard} alt="Harvard" height={70} />
          <Image src={health} alt="Healthline" height={70} />
          <Image src={ny} alt="New York Times" height={70} />
          {/* Duplicate for continuous scrolling */}
          <Image src={business} alt="Business Insider" height={70} />
          <Image src={cosmo} alt="Cosmopolitan" height={70} />
          <Image src={harvard} alt="Harvard" height={70} />
          <Image src={health} alt="Healthline" height={70} />
          <Image src={ny} alt="New York Times" height={70} />
          {/* Duplicate for continuous scrolling */}
          <Image src={business} alt="Business Insider" height={70} />
          <Image src={cosmo} alt="Cosmopolitan" height={70} />
          <Image src={harvard} alt="Harvard" height={70} />
          <Image src={health} alt="Healthline" height={70} />
          <Image src={ny} alt="New York Times" height={70} />
          <Image src={business} alt="Business Insider" height={70} />
          <Image src={cosmo} alt="Cosmopolitan" height={70} />
          <Image src={harvard} alt="Harvard" height={70} />
          <Image src={health} alt="Healthline" height={70} />
          <Image src={ny} alt="New York Times" height={70} />
        </div>
      </div>
    </div>
  );
};

export default Covered;
