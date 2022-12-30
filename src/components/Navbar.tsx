import logo from "./images/rx_logo.png";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="pharmacy logo"
            width={30}
            height={24}
            className="d-inline-block align-text-top"
          />
          <span className="maintitle">Wilson Pro Pharmacy</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
            {/* use class="nav-link active" to show its the page ur on*/}
            <a className="nav-link" href="/about">
              About
            </a>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Prescriptions
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://www.bookmyshot.com/refill/416-630-0300"
                    rel="noreferrer"
                  >
                    Online Prescription Refill
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.bookmyshot.com/covidshot/416-630-0300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    COVID-19 Vaccine Forms
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bookmyshot.com/covid/416-630-0300"
                    target="_blank"
                    className="dropdown-item"
                    rel="noreferrer"
                  >
                    COVID-19 RT-PCR/Rapid Antigen Testing Forms
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bookmyshot.com/flu/416-630-0300"
                    target="_blank"
                    className="dropdown-item"
                    rel="noreferrer"
                  >
                    Seasonal Flu Shot Forms
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bookmyshot.com/hpv/416-630-0300"
                    target="_blank"
                    className="dropdown-item"
                    rel="noreferrer"
                  >
                    HPV Vaccine
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bookmyshot.com/consult/416-630-0300"
                    target="_blank"
                    className="dropdown-item"
                    rel="noreferrer"
                  >
                    Pharmacy Consultation
                  </a>
                </li>
              </ul>
            </li>
            <a className="nav-link" href="/contact">
              Contacts
            </a>
            <a href="https://mediplexwilson.ca" className="nav-link">
              Walk-In Clinic
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
