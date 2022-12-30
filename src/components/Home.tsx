import React from "react";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";
import vector from "./images/vector.jpg";

export default function Home() {
  return (
    <div>
      <div className="slideshow container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={3}
              aria-label="Slide 4"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={three} className="d-inline w-100" alt="slideshow" />
              <div className="carousel-caption d-none d-sm-block slider">
                <h5 className="title2 vaxx">Get Your COVID-19 Vaccine Now!</h5>
                <a
                  className="testbut btn btn-light"
                  href="https://www.bookmyshot.com/covidshot/416-630-0300"
                  target="_blank"
                  rel="noreferrer"
                >
                  To Book Your COVID Vaccine, Click Here
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={four} className="d-inline w-100" alt="slideshow" />
              <div className="carousel-caption d-none d-sm-block slider">
                <h5 className="title2">Pharmacy Consultation</h5>
                <p>
                  If you have any questions about your mediations or health, the
                  pharmacists on site are here to help. We also have{" "}
                  <b>Certified Diabetes Educators</b> on site to help.
                </p>
                <a
                  className="testbut btn btn-light"
                  href="https://www.bookmyshot.com/consult/416-630-0300"
                  target="_blank"
                  rel="noreferrer"
                >
                  To Book Consulting Time, Click Here
                </a>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="/images/two.jpg" class="d-inline w-100 " alt="second slide"> */}
              <img src={two} className="d-inline w-100" alt="slideshow" />
              <div className="carousel-caption d-none d-sm-block slider">
                <h5 className="title2">Register to Book Your COVID-19 Test</h5>
                <p>
                  We have COVID-19 Testing Open NOW! We have both <b>RT-PCR</b>{" "}
                  and <b>Rapid Antigen Testing</b>
                  options.{" "}
                </p>
                <a
                  className="testbut btn btn-light"
                  href="https://www.bookmyshot.com/covid/416-630-0300"
                  target="_blank"
                  rel="noreferrer"
                >
                  To Book Your COVID-19 Test, Click Here
                </a>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="/images/one.jpg" class="d-inline vh-50 w-100" alt="first slide"> */}
              <img
                src={one}
                className="d-inline w-100 "
                style={{ height: "10%" }}
                alt="pharmacist helping patient"
              />
              <div className="carousel-caption d-none d-sm-block slider">
                <h5 className="title2">Prescription Refills!</h5>
                <p>
                  We have physical prescription refills available. A faster
                  online method
                </p>
                <a
                  className="testbut btn btn-light"
                  href="https://www.bookmyshot.com/refill/416-630-0300"
                  target="_blank"
                  rel="noreferrer"
                >
                  To Book a Refill, Click Here
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <section className="container-fluid welcome">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={vector}
              className="img-fluid mx-auto"
              alt="pharmacy vector art"
            />
          </div>
          <div className="col-md-6">
            <h1 className="title">Welcome to Wilson Pro Pharmacy</h1>
            <p className="info">
              <b> We are proud to be your pharmacy in the North York and GTA</b>{" "}
              <br /> <br />
            </p>
            <p className="info">
              {" "}
              Why choose Wilson Pro Pharmacy? We value your time and have
              options to get and refill prescription quickly, and we will soon
              have an online option to register and refill your prescriptions to
              make your experience even more faster. Along with the online
              prescription methods, there will be a online vaccine form that
              will allow you to book an appointment to take your vaccines
              completely contactless and seamlessly. <br />
              <br />
            </p>
            <p className="info">
              Along with our pharmacy, there is a walk-in clinic next door so
              you can consult a doctor and pick up your prescriptions all in a
              seamless manner. Through this we can tailor your health care needs
              to your own unique case, and truly understand you as a patient and
              person. By choosing our pharmacy you can manage your health
              expertly without having to worry.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-12 text-center title2">Where To Find Us</div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="parking">
              <b>FREE PARKING AVAILABLE IN THE FRONT AND BEHIND THE BUILDING</b>
            </p>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          title="map"
          width="100%"
          height={450}
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP_oh2ikyK4gRZtL2uKRpths&key=AIzaSyBEnugSIqz41aMKIccc9uUlwS8KT5GqKo8"
        />
      </div>
    </div>
  );
}
