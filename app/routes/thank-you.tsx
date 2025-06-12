import logo from "@public/Simlift.png";

export default function ThankYouPage() {
  return (
    <main
      className="h-100v bg-blue-300"
      style={{ padding: "35vh", textAlign: "center" }}
    >
      <h1 className="text-xl mb-5 text-white">Thank You!</h1>
      <p className="text-xl text-white">
        Your message was successfully sent. We'll get back to you soon.
        <img className="mx-auto w-200 pt-10" width="150" src={logo} />
      </p>
    </main>
  );
}
