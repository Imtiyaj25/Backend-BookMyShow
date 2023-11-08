import React from 'react'
import Visual from '../../images/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg';
import Feature_1 from '../../images/feature-1-edf4481d69166ac81917d1e40e6597c8d61aa970ad44367ce78049bf830fbda5.svg';
import Feature_2 from '../../images/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b.svg';
import Feature_3 from '../../images/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd.svg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <div class="section-one">
            <div class="container">
                <div class = "section-one-content">
                    <div class="section-one-l">
                        <img src={Visual}/>
                    </div>
                    <div class = "section-one-r text-center">
                        <h2 class = "lg-title">Use the best resume maker as your guide!</h2>
                        <p class = "text">Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, imporved by data, trusted by millions of professionals.</p>
                        <div class = "btn-group">
                            <Link to="/React-Resume/parentcomponent" className="btn btn-primary text-uppercase">Create my resume</Link>
                            <a href = "#" class = "btn btn-secondary text-uppercase">watch video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class = "section-two bg-bright">
            <div class="container">
                <div class="section-two-content">
                    <div class = "section-items">
                        <div class = "section-item">
                            <div class = "section-item-icon">
                                <img src = {Feature_1} />
                            </div>
                            <h5 class = "section-item-title">Make a resume that wins interviews!</h5>
                            <p class = "text">Use our resume maker with its advanced creation tools to tell professional story that engages recruiters, hiring managers and even CEOs.</p>
                        </div>

                        <div class = "section-item">
                            <div class = "section-item-icon">
                                <img src = {Feature_2} alt = ""/>
                            </div>
                            <h5 class = "section-item-title">Resume writing made easy!</h5>
                            <p class = "text">Resume writing has never been this effortless. Pre-generated text, visual designs and more - all already integrated into the resume maker. Just fill in your details.</p>
                        </div>

                        <div class = "section-item">
                            <div class = "section-item-icon">
                                <img src = {Feature_3} alt = ""/>
                            </div>
                            <h5 class = "section-item-title">A recruiter-tested CV maker tool</h5>
                            <p class = "text">Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your CV become truly competitive in the hiring process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutPage