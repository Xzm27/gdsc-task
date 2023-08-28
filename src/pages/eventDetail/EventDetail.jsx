import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { extractDateFromTimestamp, fetchEventDetail } from "../../utils/utils";
import mapsLogo from "../../assets/maps-icon.svg";
import ShareButton from "./ShareButton";
import { motion } from "framer-motion";
import Loader from "../Loader";
import Error from "../Error";

const EventDetail = () => {
  const { id } = useParams();

  const { data: event, isLoading, isError } = useQuery(["event", id], fetchEventDetail);

  if (isLoading) {
    return <Loader />;
  }
  
  if (isError) {
    return <Error />
  }

  return (
    <motion.section
      className="px-5 sm:px-20 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* Banner image */}
      <motion.img
        src={event.banner_image}
        alt=""
        className="h-[30vh] sm:h-[60vh] w-full object-cover border-2 border-black"
      />
      {/* Header title and date */}
      <div className="flex justify-between items-center py-5">
        <h1 className="text-2xl sm:text-5xl font-semibold pr-5">{event.title}</h1>
        <p className="text-1xl sm:text-4xl font-semibold text-center">
          {extractDateFromTimestamp(event.date_time)}
        </p>
      </div>

      {/* hosted by and location */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b-2 border-t-2 border-black">
        <div className="flex items-center">
          <p>
            <strong>Host:</strong>&ensp;
          </p>
          <img
            src={event.organiser_icon}
            alt=""
            className="h-6 w-6 rounder-full mr-2"
          />
          <p>{event.organiser_name}</p>
        </div>
        <div className="flex justify-between sm:justify-normal items-center">
          <div className="flex">
            <p>
              <strong>Loaction: </strong>{event.venue_name}, {event.venue_city}
            </p>
          </div>
          <ShareButton />
        </div>
      </div>
      {/* description */}
      <div className="py-5">
        <p>{event.description}</p>
      </div>
    </motion.section>
  );
};

export default EventDetail;
