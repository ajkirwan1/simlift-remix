/** @format */
import type { ActionFunctionArgs } from "@remix-run/node";
import glassesImage from "/public/glasses.jpg";
import { Form, useActionData } from "@remix-run/react";
import { contactFormSchema } from "../../validation/contact-form-schema";
import HeaderHero from "~/components/header-hero";
import Footer from "~/components/footer";
export default function Contact() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="h-100v">
      <div className="absolute top-0 w-full z-10 border-b-1">
        <HeaderHero />
      </div>
      <div className="relative w-full h-full">
        <img src={glassesImage} alt="" className="object-cover w-full h-full" />
        <div className="flex flex-col-reverse sm:flex-row absolute top-[20%] sm:top-1/4 sm:right-32 w-screen sm:w-4/5 pt-[7%]">
          <div className="hidden sm:block basis-2/6 text-amber-50">
            <div className="m-auto w-4/5 h-full text-center">
              <h3 className="text-5xl mt-20  font-extralight">Contact us</h3>
              <div className="mt-10">
                <p className="mb-2">biuro@simlift.pl</p>
                <p className="mb-2">+48 798 729 285 </p>
                <p>+48 601 302 840</p>
              </div>
            </div>
          </div>
          <div className="m-3 sm:m-0 basis-4/6">
            <span className="text-white text-2xl"></span>
            <form
              method="post"
              action="https://formsubmit.co/rejven777@gmail.com"
              className="sm:grid sm:grid-rows-auto sm:grid-cols-[50%_50%] h-fitneutral-400 p-6 rounded-md mt-2"
            >
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/thank-you"
              />
              <p className="col-start-1 col-end-2 row-start-1 h-full sm:w-5/6">
                <label className="flex flex-col">
                  <span className="text-white">Email Address:</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="border border-solid rounded-md border-sky-900 basis-full p-2 mb-2 mt-0"
                  />
                </label>
              </p>

              <p className="col-start-1 col-end-2 h-full sm:w-5/6">
                <label className="flex flex-col">
                  <span className="text-white">Name:</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border border-solid rounded-md border-sky-900 basis-full p-2 mb-2 mt-0"
                  />
                </label>
              </p>

              <p className="col-start-1 col-end-2 h-full sm:w-5/6">
                <label className="flex flex-col">
                  <span className="text-white">Contact number:</span>
                  <input
                    type="tel"
                    name="tel"
                    placeholder="+48 123 456 789"
                    className="border border-solid rounded-md border-sky-900 basis-full p-2 mb-2 mt-0"
                  />
                </label>
              </p>

              <p className="row-start-1 row-end-4 col-start-2 h-full">
                <label className="flex flex-col h-full">
                  <span className="text-white">Message:</span>
                  <textarea
                    name="message"
                    required
                    placeholder="Write your message to us here"
                    className="border border-solid rounded-md border-sky-900 basis-full p-2 mb-2 mt-0"
                  ></textarea>
                </label>
              </p>

              <div className="flex col-span-full m-auto h-16">
                <button
                  type="submit"
                  className="border border-solid w-32 h-12 m-auto rounded-md bg-stone-50 text-black text-sm font-normal hover:bg-slate-400 opacity-70 mt-10 mr-10"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
/*
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const tel = formData.get("tel");
  const message = formData.get("message");

  console.log(name, email, tel, message);

  const validateResult = contactFormSchema.safeParse({
    name: name,
    email: email,
    phone: tel,
    message: message,
  });

  if (!validateResult.success) {
    const formFieldErrors = validateResult.error.flatten().fieldErrors;
    console.log(formFieldErrors);

    const errorObject = {
      name: formFieldErrors.name,
      phone: formFieldErrors.phone,
      email: formFieldErrors.email,
      message: formFieldErrors.message,
    };

    return errorObject;
  }

  return null;
}
*/
