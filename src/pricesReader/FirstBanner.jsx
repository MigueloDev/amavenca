import React from "react";

import '../styles/banner.css'
import banner from '../assets/1.png'

export const FirstBanner = () => {
  return (
    <>
      <div
        className="bg-image text-center shadow-1-strong mb-0 text-white banner-img  bg-light"
      >
        <img src={banner} className="rounded" alt="banner amavenca" />
      </div>
    </>
  );
};
