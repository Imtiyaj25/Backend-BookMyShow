import React from "react";
import SampleResume from "../../images/dublin-resume-templates.avif";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div class="home">
        <div class="header-content text-center">
          <h6 class="text-uppercase text-blue-dark fs-14 fw-6 ls-1">
            online resume builder
          </h6>
          <h1 class="lg-title">
            Only 2% of resumes make it pass the first round. Be in the top 2%
          </h1>
          <p class="text-dark fs-18">
            Use professional field-tested resume templates that follow that
            exact 'resume rules' employers look for. Easy to use and done within
            minutes - try now for free!
          </p>
          <Link
            to="/parentcomponent"
            className="btn btn-primary text-uppercase"
          >
            Create my resume
          </Link>

          <img src={SampleResume} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
