import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
import { analytics } from "../firebaseConfig";
import image from "./images/pharmacy.jpg";

export default function Contact() {
  useEffect(() => {
    logEvent(analytics, "contact_page_view");
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            className="img-fluid mx-auto pharm"
            src={image}
            alt="pharmacy picutre"
          />
        </div>
      </div>
      <div className="row contact">
        <div className="col">
          <h4 className="title">Contact Us</h4>
          <ul>
            <li>Phone Number: 416-630-0300, 416-630-0400</li>
            <li>Fax Number: 416-630-0600</li>
            <li>
              You can email us at{" "}
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=wilsonpropharmacy@gmail.com&tf=cm"
                target="_blank"
                rel="noreferrer"
              >
                wilsonpropharmacy@gmail.com
              </a>
            </li>
            <li>928 Wilson Ave, North York, ON, M3K 1E7</li>
            <li>
              You can also reach us through our{" "}
              <a
                href="https://www.facebook.com/Wilson-Pro-Pharmacy-102690065308963"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              Walk-In Clinic Information:
              <ul>
                <li>
                  Email them at
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=info@medplexwoodbridge.ca&tf=cm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    info@medplexwoodbridge.ca
                  </a>
                </li>
                <li>Phone Number: 416-901-5426, 905-265-0717</li>
                <li>Fax Number: 416-901-6542</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
