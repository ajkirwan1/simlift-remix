/** @format */
import Footer from "~/components/footer";
import Header from "~/components/header";
import { motion } from "motion/react";

import { useLoaderData } from "@remix-run/react";
//import { createLoader } from "~/lib/contentful.server";
//import { validateLocale } from "~/config/locales";

const container = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function About() {
  //const { content } = useLoaderData();

  return (
    <>
      <div className="flex flex-col min-h-85vh items-center bg-gray-200">
        <div className="bg-sky-950 w-full">
          <Header />
        </div>
        <motion.div
          className="flex flex-col flex-1 text-center justify-center mt-10 mb-10 gap-8 px-6 sm:px-0"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.h1 className="text-2xl sm:text-4xl text-center text-gray-700">
            About
          </motion.h1>

          <motion.p
            className="text-base-8 sm:text-lg/8 max-w-[400px] sm:max-w-[600px] px-10 text-center"
            variants={item}
          >
            Avers Screens has been a manufacturer of screens and a wide range of
            projection accessories for over 20 years.
            <br />
            15 years ago we started the production of projector lifts.
            <br />
            Lifts are now our main product.
            <br />
            Such concentration has allowed us to refine the design and
            technology of these devices. As a result, our lifts are practically
            failure-free.
          </motion.p>
          <motion.p
            className="text-base-8 sm:text-lg/8 max-w-[400px] sm:max-w-[600px] text-center border-t-2 p-10 pb-0 border-cyan-800"
            variants={item}
          >
            There are almost 3,000 of them in operation in Poland and Europe.
            <br />
            We try to constantly modify our devices to ensure the compatibility
            of the offer with the current offer of multimedia projectors on the
            market.
            <br />
            We are also open to individual customer requirements. We also make
            individual non-standard lifts.
          </motion.p>
          <motion.p
            className="text-base-8 sm:text-lg/8 max-w-[400px] sm:max-w-[600px] text-center border-t-2 p-10 border-cyan-800"
            variants={item}
          >
            Our portfolio includes lifts with a reach of 4 meters and a load
            capacity of 80 kg.
            <br />
            We always remain loyal to our business clients (B2B) who make up 90%
            of our customer base.
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
