/** @format */
import type { ActionFunctionArgs } from "@remix-run/node";
import glassesImage from "/public/glasses.jpg";
import { Form, useActionData } from "@remix-run/react";
import { contactFormSchema } from "../../validation/contact-form-schema";
import HeaderHero from "~/components/header-hero";
export default function Contact() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="bg-sky-950 h-100v">
      <div className="fixed top-0 w-full z-10 border-b-1">
        <HeaderHero />
      </div>
      <div className="relative w-full h-screen">
        <img
          src={glassesImage}
          alt=""
          className="object-cover w-full h-screen opacity-80"
        />
        <div className="flex absolute top-1/4 right-32 w-4/5">
          <div className="basis-3/6 text-amber-50">
            <div className="m-auto w-4/5 h-full text-center">
              <h3 className="text-5xl mt-20">Contact us</h3>
              <div className="mt-10">
                <p>AVERS SCREENS sp.z.o.o</p>
                <p>AVERS SCREENS sp.z.o.o</p>
                <p>AVERS SCREENS sp.z.o.o</p>
              </div>
            </div>
          </div>
          <Form
            method="post"
            className="flex flex-col gap-4 bg-white p-6 rounded-md  basis-3/6"
          >
            <span>Enquire now</span>
            <p className="col-start-1 col-end-2">
              <label className="flex flex-col">
                Email Address:
                <input
                  type="email"
                  name="email"
                  placeholder="Mr blogs"
                  // value="ajkirwan1@gmail.com"
                  className="border-2 border-solid"
                ></input>
              </label>
              {actionData?.email ? <span>{actionData.email}</span> : null}
            </p>
            <p className="col-start-1 col-end-2">
              <label className="flex flex-col">
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Mr blogs"
                  // value="ajkirwan1@gmail.com"
                  className="border-2 border-solid"
                ></input>
              </label>
              {actionData?.name ? <span>{actionData.name}</span> : null}
            </p>
            <p className="col-start-1 col-end-2">
              <label className="flex flex-col">
                Contact number
                <input
                  type="tel"
                  name="tel"
                  placeholder="+447095519529"
                  // value="ajkirwan1@gmail.com"
                  className="border-2 border-solid"
                ></input>
              </label>
              {actionData?.phone ? <span>{actionData.phone}</span> : null}
            </p>
            <p className="row-start-1 row-end-4 col-start-2 ">
              <label className="flex flex-col h-full">
                Message
                <textarea
                  name="message"
                  placeholder="I would like to enquire about..."
                  rows={5}
                  className="border-2 border-solid basis-full "
                  // value="ajkirwan1@gmail.com"
                ></textarea>
              </label>
              {actionData?.message ? <span>{actionData.message}</span> : null}
            </p>
            <button type="submit" className="border-2 border-solid w-32 h-10 m-auto">
              Submit
            </button>
          </Form>
        </div>
      </div>
      <div>
        Contact
        <Form method="post" className="grid grid-cols-2 gap-4 bg-white">
          <p className="col-start-1 col-end-2">
            <label className="flex flex-col">
              Email Address:
              <input
                type="email"
                name="email"
                placeholder="Mr blogs"
                // value="ajkirwan1@gmail.com"
                className="border-2 border-solid"
              ></input>
            </label>
            {actionData?.email ? <span>{actionData.email}</span> : null}
          </p>
          <p className="col-start-1 col-end-2">
            <label className="flex flex-col">
              Name:
              <input
                type="text"
                name="name"
                placeholder="Mr blogs"
                // value="ajkirwan1@gmail.com"
                className="border-2 border-solid"
              ></input>
            </label>
            {actionData?.name ? <span>{actionData.name}</span> : null}
          </p>
          <p className="col-start-1 col-end-2">
            <label className="flex flex-col">
              Contact number
              <input
                type="tel"
                name="tel"
                placeholder="+447095519529"
                // value="ajkirwan1@gmail.com"
                className="border-2 border-solid"
              ></input>
            </label>
            {actionData?.phone ? <span>{actionData.phone}</span> : null}
          </p>
          <p className="row-start-1 row-end-4 col-start-2 ">
            <label className="flex flex-col h-full">
              Message
              <textarea
                name="message"
                placeholder="I would like to enquire about..."
                className="border-2 border-solid basis-full "
                // value="ajkirwan1@gmail.com"
              ></textarea>
            </label>
            {actionData?.message ? <span>{actionData.message}</span> : null}
          </p>
          <button type="submit" className="border-2 border-solid">
            Submit
          </button>
        </Form>
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
    tel: tel,
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
  // return redirect("/");
}
