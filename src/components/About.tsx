import image from "./images/about.jpg";

export default function About() {
  return (
    <section className="container about">
      <div className="row">
        <div className="col-md-6 align-items-center">
          <img
            className="img-fluid mx-auto"
            src={image}
            alt="pharmacist team"
          />
        </div>
        <div className="col-md-6">
          <h4 className="title">About Our Pharmacy!</h4>
          <p className="info">
            We are a pharmacy in the North York and GTA area with the Medplex
            walk-in clinic next door to make your medical experience quick and
            easy. We have a humble group of pharmacist and doctors that are
            eager to help improve your health and keep you safe. We are a
            family-friendly pharmacy where you can get your prescriptions taken
            and vaccines!
          </p>
          <p>
            <b>OUR OPENING HOURS:</b>
          </p>
          <ul>
            <li>Mon: 10am-5pm</li>
            <li>Tues: 10am-5pm</li>
            <li>Wed: 10am-5pm</li>
            <li>Thur: 10am-5pm</li>
            <li>Fri: 10am-5pm</li>
            <li>Sat-Sun: Closed</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
