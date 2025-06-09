/** @format */
import Footer from "~/components/footer";
import Header from "~/components/header";
import { motion } from "motion/react";

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
  return (
    <>
      <div className="flex flex-col min-h-85vh items-center bg-gray-200">
        <div className="bg-sky-950 w-full">
          <Header />
        </div>
        <motion.div
          className="flex flex-col flex-1 text-center justify-center mt-10 mb-10 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.p
            className="text-base sm:text-lg max-w-[80vw] sm:max-w-[50vw] text-center"
            variants={item}
          >
            <b>Simlift</b> is the successor to the respected and established
            <b> Avers Screen</b> projector lift brand.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg max-w-[80vw] sm:max-w-[50vw] text-center"
            variants={item}
          >
            For nearly <b>15 years</b>, our factory has been the sole producer
            of the complete range of top-quality elevators.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg max-w-[80vw] sm:max-w-[50vw] text-center"
            variants={item}
          >
            <b>Almost 3,000</b> of our elevators are already running flawlessly
            in Poland and internationally.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg max-w-[80vw] sm:max-w-[50vw] text-center"
            variants={item}
          >
            By staying up-to-date with the latest multimedia projector trends,
            we continually adapt our devices to ensure our offerings are
            comprehensive and compatible.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg max-w-[80vw] sm:max-w-[50vw] text-center"
            variants={item}
          >
            We are always open to customer requests that extend beyond our
            standard offerings.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg max-w-[80vw] sm:max-w-[50vw] text-center"
            variants={item}
          >
            We have produced elevators with a reach of <b>4 meters</b> and a
            load capacity of 80kg.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg max-w-[80vw] sm:max-w-[50vw] text-center"
            variants={item}
          >
            We always remain loyal to our business <b>clients (B2B)</b>, who
            make up 90% of our customer base.
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
