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
      <div className="flex flex-col min-h-85vh items-center">
        <div className="bg-sky-950">
          <Header />
        </div>
        <motion.div
          className="flex flex-col flex-1 text-center justify-center gap-4 mt-8 mb-8"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.p className="text-base sm:text-lg max-w-[80vw] sm:max-w-[70vw]" variants={item}>
            Simlift is the successor to the respected and established Avers
            Screen projector lift brand.
          </motion.p>
          <motion.p className="text-base sm:text-lg max-w-[80vw] sm:max-w-[70vw]" variants={item}>
            For nearly 15 years, our factory has been the sole producer of the
            complete range of top-quality elevators.
          </motion.p>
          <motion.p className="text-base sm:text-lg max-w-[80vw] sm:max-w-[70vw]" variants={item}>
            Almost 3,000 of our elevators are already running flawlessly in
            Poland and internationally.
          </motion.p>
          <motion.p className="text-base sm:text-lg max-w-[80vw] sm:max-w-[70vw]" variants={item}>
            By staying up-to-date with the latest multimedia projector trends,
            we continually adapt our devices to ensure our offerings are
            comprehensive and compatible.
          </motion.p>
          <motion.p className="text-base sm:text-lg max-w-[80vw] sm:max-w-[70vw]" variants={item}>
            We are always open to customer requests that extend beyond our
            standard offerings.
          </motion.p>
          <motion.p className="text-base sm:text-lg max-w-[80vw] sm:max-w-[70vw]" variants={item}>
            We have produced elevators with a reach of 4 meters and a load
            capacity of 80kg.
          </motion.p>
          <motion.p className="text-base sm:text-lg max-w-[80vw] sm:max-w-[70vw]" variants={item}>
            We always remain loyal to our business clients (B2B), who make up
            90% of our customer base.
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
