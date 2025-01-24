/** @format */
import { Form, redirect } from "@remix-run/react";
import { contactFormSchema } from "../../validation/contact-form-schema";
import { useActionData } from "@remix-run/react";
export default function Contact() {
  const actionData = useActionData();

  return (
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
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const tel = formData.get("tel");

  return redirect("/");
}
