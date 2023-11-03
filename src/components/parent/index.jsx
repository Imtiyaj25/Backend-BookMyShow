import React, { useState } from "react";
import MyComponent from "../mycomp";
import AnotherComponent from "../anather";
import About from "../About";
import Skills from "../Skills";
import Achievements from "../Achievements";
import Experience from "../Exprience";
import Education from "../Education";
import Projects from "../Projects";
import {BiMap} from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg'
import ExperiencesForm from "../mycomp";

function ParentComponent() {
  // About section
  const [name, setName] = useState({
    first: "",
    middle: "",
    last: "",
    img: "",
    designation: "",
    address: "",
    email: "",
    phoneno: "",
    portfolio: "",
  });

  const handleNameChange = (newName) => {
    setName(newName);
  };

  // Skills section
  const [skills, setSkills] = useState({
    skills: "",
  });

  const handleSkillsChange = (newSkills) => {
    setSkills(newSkills);
  };

  // Achievments section
  const [achiev, setAchiev] = useState({
    achiev: "",
    desc: "",
  });

  const handleAchievChange = (newAchiev) => {
    setAchiev(newAchiev);
  };

  // Experience section
  const [exp, setExp] = useState({
    title: "",
    organization: "",
    location: "",
    start: "",
    end: "",
    desc: "",
  });

  const handleExpChange = (newExp) => {
    setExp(newExp);
  };

  // Education Section
  const [edu, setEdu] = useState({
    school: "",
    degree: "",
    city: "",
    start: "",
    end: "",
    desc: ""
  })

  const handleEduChange = (newEdu) => {
    setEdu(newEdu);
  }

  // Projects Section
  const [proj, setProj] = useState({
    title: "",
    link: "",
    desc: ""
  })

  const handleProjChange = (newProj) => {
    setProj(newProj)
  }

  // print CV
  function printCV() {
    window.print();
  }
  return (
    <div>
      {/* <MyComponent name={exp} onExpChange={handleExpChange} /> */}
      {/* <ExperiencesForm name={exp} onExpChange={handleExpChange}/> */}
      <About name={name} onNameChange={handleNameChange} />
      <Skills skills={skills} onSkillsChange={handleSkillsChange} />
      <Achievements achiev={achiev} onAchievChange={handleAchievChange} />
      <Experience exp={exp} onExpChange={handleExpChange} />
      <Education edu={edu} onEduChange={handleEduChange} />
      <Projects proj={proj} onProjChange={handleProjChange} />
      <section id="preview-sc" className="print_area">
        <div className="container">
          <div className="preview-cnt">
            <div className="preview-cnt-l bg-green text-white">
              <div className="preview-blk">
                <div className="preview-image">
                  <img src={name.img} alt="" /><a href={name.img}>{name.img}</a>
                </div>
                <div className="preview-item preview-item-name">
                  <span className="preview-item-val fw-6" id="fullname_dsp">
                    {name.first} {name.middle} {name.last}
                  </span>
                </div>
                <div className="preview-item">
                  <span
                    className="preview-item-val text-uppercase fw-6 ls-1"
                    id="designation_dsp"
                  >
                    {name.designation}
                  </span>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>about</h3>
                </div>
                <div className="preview-blk-list">
                  <div className="preview-item">
                    <span className="preview-item-val" id="phoneno_dsp">
                      &#9742; {name.phoneno}
                    </span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="email_dsp">
                      &#9993; {name.email}
                    </span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="address_dsp">
                    <BiMap/> {name.address}
                    </span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="summary_dsp">
                      <a href={name.portfolio} className="text-blue-light" target="_blank"><CgWebsite/> {name.portfolio}</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>skills</h3>
                </div>
                <div className="skills-items preview-blk-list" id="skills_dsp">
                  {skills.skills}
                  {/* <!-- skills list here --> */}
                </div>
              </div>
            </div>

            <div className="preview-cnt-r bg-white">
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>Achievements</h3>
                </div>
                <div
                  className="achievements-items preview-blk-list"
                  id="achievements_dsp"
                >
                  <div className="preview-item">
                    <span className="preview-item-val">{achiev.achiev}</span>
                    <span className="preview-item-val">{achiev.desc}</span>
                    
                  </div>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>educations</h3>
                </div>
                <div
                  className="educations-items preview-blk-list"
                  id="educations_dsp"
                >
                  <div className="preview-item">
                    <span className="preview-item-val">{edu.school}</span>
                    <span className="preview-item-val">{edu.degree}</span>
                    <span className="preview-item-val">{edu.city}</span>
                    <span className="preview-item-val">{edu.start}</span>
                    <span className="preview-item-val">{edu.end}</span>
                    <span className="preview-item-val">{edu.desc}</span>
                  </div>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>experiences</h3>
                </div>
                <div
                  className="experiences-items preview-blk-list"
                  id="experiences_dsp"
                >
                  <div className="preview-item">
                    <span className="preview-item-val">{exp.title}</span>
                    <span className="preview-item">{exp.organization}</span>
                    <span className="preview-item">{exp.location}</span>
                    <span className="preview-item">{exp.start}</span>
                    <span className="preview-item">{exp.end}</span>
                    <span className="preview-item">{exp.desc}</span>
                  
                  </div>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>projects</h3>
                </div>
                <div
                  className="projects-items preview-blk-list"
                  id="projects_dsp"
                >
                  <div className="preview-item">
                    <span className="preview-item-val">{proj.title}</span>
                    <span className="preview-item-val"><a href={proj.link} target="_blank">{proj.link}</a></span>
                    <span className="preview-item-val">{proj.desc}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="print-btn-sc">
        <div className="container">
          <button
            type="button"
            className="print-btn btn btn-primary"
            onClick={printCV}
          >
            Print CV
          </button>
        </div>
      </section>

      {/* <AnotherComponent name={name} /> */}
    </div>
  );
}

export default ParentComponent;
