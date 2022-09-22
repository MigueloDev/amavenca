import React from "react";

import mavesa from "../assets/4.png"
import pampero from "../assets/3.png"
import harina from "../assets/2.png"

export const BannerFooter = () => {
  return (
    <div className="d-flex  custom-margin__footer mt-2">
      <div className="col-4 footer-banner px-1 rounded">
        <img src={mavesa} className="rounded" alt="" />
      </div>
      <div className="col-4 footer-banner px-1 rounded">
        <img src={pampero} className="rounded" alt="" />
      </div>
      <div className="col-4 footer-banner px-1 rounded">
        <img src={harina} className="rounded" alt="" />
      </div>
    </div>
  );
};
