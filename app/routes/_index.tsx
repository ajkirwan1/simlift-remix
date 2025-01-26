/** @format */

import type { MetaFunction } from "@remix-run/node";
import heroImage from "/public/1picture.jpg";
import Header from "~/components/header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="w-full h-screen">
        <img src={heroImage} alt="" className="object-cover w-full h-screen" />
        <div className="absolute top-0 w-full">
          <Header />
        </div>
        <div className="absolute top-1/4 left-1/3 text-white">
          <h1 className="text-4xl">Ceiling mounted projector lifts</h1>
        </div>
      </div>
      <main>
        <section>
          <h2>Section2</h2>
        </section>
        <section>
          <h2>Section3</h2>
        </section>
      </main>
    </>
  );
}
