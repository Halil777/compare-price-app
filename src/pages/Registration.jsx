import React from "react";

const Registration = () => {
  return (
    <div>
      <section id="registration">
        <div class="reminder">
          <p>Get 100 Online Courses for Free</p>
          <h1>Register To Get It</h1>
          <div class="time">
            <div class="date">
              18 <br />
              Days
            </div>
            <div class="date">
              23 <br />
              Hours
            </div>
            <div class="date">
              07 <br />
              Minutes
            </div>
            <div class="date">
              07 <br />
              Seconds
            </div>
          </div>
        </div>
        <div class="form">
          <h3>Create Free Account NOW!</h3>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <div class="btn">
            <a href="#" class="yellow">
              Submit Form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
