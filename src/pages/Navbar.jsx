import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[10vh] bg-white border-b-2 border-black flex items-center justify-between px-5 sm:px-20 sticky top-0 z-50">
      <img
        src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg"
        alt=""
        className="h-1/3 hidden md:block"
        loading="lazy"
      />
      <img
        src="https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png"
        alt=""
        className="h-1/3 block md:hidden"
      />

      <Link to="/">
        <p className="text-2xl  hover:text-gray-400">Events</p>
      </Link>
    </div>
  );
};

export default Navbar;
