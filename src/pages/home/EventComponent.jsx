import React, { useState } from "react";
import { extractDateFromTimestamp } from "../../utils/utils";
import mapsLogo from "../../assets/maps-icon.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EventComponent = ({ event }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="h-96 w-72 border-b-2 border-black group">
      <Link to={`/${event.id}`}>
        <div
          className="h-[80%] relative overflow-hidden border-2 border-black shadow-2xl"
        >
          <motion.img
            src={event.banner_image}
            alt=""
            className="h-full object-cover group-hover:scale-105 transition-all duration-300"
            onClick={() => setIsClicked(true)}
          />
          <div className="absolute px-3 py-1 bg-white right-3 top-3 rounded-full border-2 border-black">
            {extractDateFromTimestamp(event.date_time)}
          </div>
        </div>
      </Link>

      <h2 className="text-2xl font-semibold">{event.title}</h2>
      <div className="flex gap-1 align-center">
        <img src={mapsLogo} alt="mapsLogo" className="h-5 w-5" />
        <p className="text-1xl">{event.venue_city}</p>
      </div>
    </div>
  );
};

export default EventComponent;
