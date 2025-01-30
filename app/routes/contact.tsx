/** @format */
import type { ActionFunctionArgs } from "@remix-run/node";

import { Form, useActionData } from "@remix-run/react";
import { contactFormSchema } from "../../validation/contact-form-schema";
import Header from "~/components/header";
export default function Contact() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="bg-sky-950 h-100v">
      <Header></Header>
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
          <button type="submit"  className="border-2 border-solid">Submit</button>
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
