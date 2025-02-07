/** @format */
import Footer from "~/components/footer";
import Header from "~/components/header";
export default function About() {
  return (
    <>
      <div className="min-h-85vh">
        <div className="bg-sky-950">
          <Header />
        </div>
        <div>
          <p>
            Simlift is the successor to the well-known and renowned brand of
            Avers Screen projector lifts.
          </p>
          <p>
            For almost 15 years our factory has been the exclusive manufacturer
            of the entire model range of the highest quality elevators.
          </p>
          <p>
            Nearly 3,000 of our elevators are already operational infallibly
            both in Poland and abroad.
          </p>
          <p>
            By following the latest trends in the offer of multimedia
            projectors, we modify our devices so the offer is compatible and
            complete.
          </p>
          <p>
            We remain open to requirements of our customers that go beyond the
            standard offer.
          </p>
          <p>
            We have manufactured elevators with a reach of 4 meters and those
            with a load capacity of 80kg.
          </p>
          <p>
            Towards our business clients (B2B) constituting of 90% we always
            remain loyal.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
