import React from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchEvents } from "../../utils/utils";
import EventComponent from "./EventComponent";
import { motion } from "framer-motion";
import Loader from "../Loader";
import Error from "../Error";

const Home = () => {
  const { data: events, isLoading, isError } = useQuery(["eventdata"], fetchEvents);

  // animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />
  }

  return (
    <motion.section
      className="px-5 sm:px-20 py-16 min-h-screen"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <h1
        className="text-6xl font-semibold mb-10 text-center"
      >
        Explore Events
      </h1>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-10"
        variants={container}
        initial="hidden"
              animate="show"
              viewport={{ once: true }}
      >
        {events.map((event) => {
          return (
            <motion.div key={event.id} variants={listItem}>
              <EventComponent event={event} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Home;
