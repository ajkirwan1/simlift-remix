/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @format */
import { motion } from "motion/react";

const modal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Modal({ handleModal, chosenItem }) {
  return (
    <motion.div
      key={"my_unique_key"}
      variants={modal}
      initial="hidden"
      animate="show"
      className="absolute z-20 w-full h-full  bg-black bg-opacity-80 flex justify-center items-center"
      onClick={handleModal}
    >
      <div className="flex items-center text-center w-3/4 sm:w-2/4 h-1/2 sm:h-1/3 border border-orange-900 rounded-2xl shadow-lg bg-white text-black p-2">
        <p className="text-lg">{chosenItem}</p>
      </div>
    </motion.div>
  );
}
