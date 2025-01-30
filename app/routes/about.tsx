/** @format */
import { Form, redirect, useActionData } from "@remix-run/react";
import { contactFormSchema } from "../../validation/contact-form-schema";
import Header from "~/components/header";
export default function About() {
  const actionData = useActionData();

  return (
    <div className="bg-sky-950 h-100v">
    <Header></Header>
    <div>
      Contact
      <Form method="post">
        <p>
          <input type="email" name="email"></input>
        </p>
        <p>
          <input type="text" name="email"></input>
        </p>
        <p>
          <input type="tel" name="tel"></input>
        </p>
        <button type="submit">Submit</button>
      </Form>
    </div>
    </div>
  );
}
