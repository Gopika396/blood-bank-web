import React from "react";
import mainImage from "../assets/images/main.jpg";
import donorImage from "../assets/images/donor.jpg";
import "../assets/style/style.css";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">

          <a className="navbar-brand" href="#">
            LifePulse Care
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarContent"
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#blood">
                  Blood Types
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#donate">
                  Donate
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>


      <section className="hero" id="home">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1>Give Hope With Every Drop</h1>

              <p>
                A small donation can support patients during
                emergencies, surgeries and important medical treatments.
              </p>

              <a href="#donate" className="btn btn-main">
                Donate Now
              </a>

            </div>

            <div className="col-md-6">

              <img
                src={mainImage}
                className="img-fluid rounded"
                alt="Blood Donation"
              />

            </div>

          </div>

        </div>

      </section>


      <section className="about" id="about">

        <div className="container">

          <h2>About LifePulse Care</h2>

          <p>
            LifePulse Care connects blood donors with people who
            need blood during medical emergencies and treatments.
          </p>

        </div>

      </section>


      <section className="blood-groups" id="blood">

        <div className="container">

          <h2>Blood Types</h2>

          <div className="row">

            <div className="col-md-3">
              <div className="blood-card">
                <h3>A+</h3>
                <p>Blood Type</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="blood-card">
                <h3>B+</h3>
                <p>Blood Type</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="blood-card">
                <h3>O+</h3>
                <p>Blood Type</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="blood-card">
                <h3>AB+</h3>
                <p>Blood Type</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section className="donate" id="donate">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <img
                src={donorImage}
                className="img-fluid rounded"
                alt="Blood Donor"
              />

            </div>

            <div className="col-md-6">

              <h2>Become a Donor</h2>

              <p>
                Donating blood is a meaningful way to support
                patients who need blood for medical care.
              </p>

              <button
                className="btn btn-main"
                onClick={() => alert("Thank you for choosing to donate blood!")}
              >
                Become a Donor
              </button>

            </div>

          </div>

        </div>

      </section>


      <section className="contact" id="contact">

        <div className="container">

          <h2>Contact LifePulse Care</h2>

          <p>Phone: +91 98765 43210</p>

          <p>Email: lifepulsecare@gmail.com</p>

          <p>Location: Bengaluru, Karnataka</p>

        </div>

      </section>


      <footer>

        <div className="container">

          <div className="footer-links">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#blood">Blood Types</a>
            <a href="#donate">Donate</a>
            <a href="#contact">Contact</a>

          </div>

          <p>
            © 2026 LifePulse Care. All Rights Reserved.
          </p>

        </div>

      </footer>
    </>
  );
}

export default Home;