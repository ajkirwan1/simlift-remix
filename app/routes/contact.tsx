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
    <div className="h-85v">
      <div className="fixed top-0 w-full z-10 border-b-1">
        <HeaderHero />
      </div>
      <div className="relative w-full h-full ">
        <img
          src={glassesImage}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="flex flex-col-reverse sm:flex-row absolute top-1/4 sm:top-1/4 sm:right-32 w-screen sm:w-4/5 ">
          <div className="hidden sm:block basis-2/6 text-amber-50">
            <div className="m-auto w-4/5 h-full text-center">
              <h3 className="text-5xl mt-20">Contact us</h3>
              <div className="mt-10">
                <p>AVERS SCREENS sp.z.o.o</p>
                <p>AVERS SCREENS sp.z.o.o</p>
                <p>AVERS SCREENS sp.z.o.o</p>
              </div>
            </div>
          </div>
          <div className="m-3 sm:m-0 basis-4/6">
            <span className="text-white text-2xl">Enquire now</span>
            <Form
              method="post"
              className="sm:grid sm:grid-rows-auto sm:grid-cols-[50%_50%] h-fit bg-white p-6 rounded-md mt-2"
            >
              <p className="col-start-1 col-end-2 row-start-1 h-full sm:w-5/6">
                <label className="flex flex-col">
                  Email Address:
                  <input
                    type="string"
                    name="email"
                    placeholder="Mr blogs"
                    // value="ajkirwan1@gmail.com"
                    className="border border-solid rounded-md border-sky-900 basis-full p-2  mb-2 mt-0"
                  ></input>
                </label>
              </p>
              {actionData?.email ? (
                <span className="col-start-1 col-end-2 row-start-2 h-full w-5/6 text-orange-700">
                  {actionData.email}
                </span>
              ) : null}
              <p className="col-start-1 col-end-2 h-full sm:w-5/6 ">
                <label className="flex flex-col">
                  Name:
                  <input
                    type="text"
                    name="name"
                    placeholder="Mr blogs"
                    // value="ajkirwan1@gmail.com"
                    className="border border-solid rounded-md border-sky-900 basis-full p-2 mb-2 mt-0"
                  ></input>
                </label>
              </p>
              {actionData?.name ? (
                <span className="col-start-1 col-end-2 row-start-4  text-orange-700">
                  {actionData.name}
                </span>
              ) : null}
              <p className="col-start-1 col-end-2 h-full sm:w-5/6">
                <label className="flex flex-col">
                  Contact number
                  <input
                    type="tel"
                    name="tel"
                    placeholder="+447095519529"
                    // value="ajkirwan1@gmail.com"
                    className="border border-solid rounded-md border-sky-900 basis-full p-2 mb-2 mt-0"
                  ></input>
                </label>
              </p>
              {actionData?.phone ? (
                <span className="col-start-1 col-end-2 h-full w-5/6  text-orange-700">
                  {actionData.phone}
                </span>
              ) : null}
              <p className="row-start-1 row-end-4 col-start-2 h-full">
                <label className="flex flex-col h-full ">
                  Message
                  <textarea
                    name="message"
                    placeholder="I would like to enquire about..."
                    // rows={5}
                    className="border border-solid rounded-md border-sky-900 basis-full p-2 mb-2 mt-0"
                  ></textarea>
                </label>
              </p>
              {actionData?.message ? (
                <span className="col-start-2 col-end-3 row-start-4  text-orange-700">
                  {actionData.message}
                </span>
              ) : null}
              <div className="flex col-span-full m-auto h-16">
                <button
                  type="submit"
                  className="border border-solid w-32 h-10 m-auto rounded-md bg-sky-900 text-white text-sm font-light hover:bg-sky-800"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

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
