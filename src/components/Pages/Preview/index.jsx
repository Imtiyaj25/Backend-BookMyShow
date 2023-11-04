import React, { useState } from "react";
import {BiMap} from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg'
import './style.css';
import About from "../DetailsFilling/AboutDetails";
import Achievements from "../DetailsFilling/Achievements";
import Skills from "../DetailsFilling/Skills";

function ParentComponent() {
  // ----------------------------------- About section ------------------------
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

  // -------------------------------Skills section -------------------------
  const [skills, setSkills] = useState({
    skills: "",
  });

  const handleSkillsChange = (newSkills) => {
    setSkills(newSkills);
  };

  // -------------------------- Achievments section ---------------------------
  const [achiev, setAchiev] = useState({
    achiev: "",
    desc: "",
  });

  const handleAchievChange = (newAchiev) => {
    setAchiev(newAchiev);
  };


  // ------------------------------Projects Section -----------------------------
  const [proj, setProj] = useState({
    title: "",
    link: "",
    desc: ""
  })

  const handleProjChange = (newProj) => {
    setProj(newProj)
  }


  // ----------------------------- Experience Section ------------------------

  const [experiences, setExperiences] = useState([
    {
      title: '',
      organization: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const handleInputChange = (index, field, value) => {
    
    // Create a copy of the experiences array to avoid mutating state directly
    const updatedExperiences = [...experiences];

    // Update the specific field of the experience at the given index
    updatedExperiences[index][field] = value;

    // Update the state with the new array
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    // Add a new empty experience to the array
    setExperiences([...experiences, {}]);
  };

  const removeExperience = (index) => {
    // Remove the experience at the specified index
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };


  // ------------------------------ Education Section -------------------------------------
  const [education, setEducation] = useState([
    {
      school: '',
      degree: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const handleInputChanges = (index, field, value) => {
    
    // Create a copy of the experiences array to avoid mutating state directly
    const updatedEducation = [...education];

    // Update the specific field of the experience at the given index
    updatedEducation[index][field] = value;

    // Update the state with the new array
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    // Add a new empty experience to the array
    setEducation([...education, {}]);
  };

  const removeEducation = (index) => {
    // Remove the experience at the specified index
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };


  // ------------------------- Projects Section ----------------------------
  const [project, setProject] = useState([
    {
      title: '',
      link: '',
      description: '',
    },
  ]);

  const handleProjectChange = (index, field, value) => {
    
    // Create a copy of the experiences array to avoid mutating state directly
    const updatedProject = [...project];

    // Update the specific field of the experience at the given index
    updatedProject[index][field] = value;

    // Update the state with the new array
    setProject(updatedProject);
  };

  const addProject = () => {
    // Add a new empty experience to the array
    setProject([...project, {}]);
  };

  const removeProject = (index) => {
    // Remove the experience at the specified index
    const updatedProject = project.filter((_, i) => i !== index);
    setProject(updatedProject);
  };



  // print CV
  function printCV() {
    window.print();
  }


  return (
    <div>
      <About name={name} onNameChange={handleNameChange} />
      
      <Achievements achiev={achiev} onAchievChange={handleAchievChange} />
      
      

      {/* ------------------- Education Section --------------------------- */}
      
      {education.map((education, index) => (
        <div key={index}>
      <section id = "about-sc" className = "">
            <div className = "container">
                <div className = "about-cnt">
                    <form action="" class="cv-form" id = "cv-form">


                    <div class="cv-form-blk">
                            <div className = "cv-form-row-title">
                                <h3>education</h3>
                            </div>

                            <div className = "row-separator repeater">
                                <div className = "repeater" data-repeater-list = "group-c">
                                    <div data-repeater-item>
                                        <div className = "cv-form-row cv-form-row-experience">
                                            <div className = "cols-3">
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">School</label>
                                                    <input name = "school" type = "text" className  = "form-control edu_school" id = ""  value={education.school} onChange={(e) => handleInputChanges(index, 'school', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Degree</label>
                                                    <input name = "degree" type = "text" className = "form-control edu_degree" id = ""  value={education.degree} onChange={(e) => handleInputChanges(index, 'degree', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">City</label>
                                                    <input name = "city" type = "text" className = "form-control edu_city" id = ""  value={education.city} onChange={(e) => handleInputChanges(index, 'city', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>

                                            <div className = "cols-3">
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Start Date</label>
                                                    <input name = "start" type = "date" className = "form-control edu_start_date" id = ""  value={education.startDate} onChange={(e) => handleInputChanges(index, 'startDate', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">End Date</label>
                                                    <input name = "end" type = "date" className = "form-control edu_graduation_date" id = ""  value={education.endDate} onChange={(e) => handleInputChanges(index, 'endDate', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Description</label>
                                                    <input name = "desc" type = "text" className = "form-control edu_description" id = ""  value={education.description} onChange={(e) => handleInputChanges(index, 'description', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>

                                            <button type = "button" className = "repeater-remove-btn" onClick={() => removeEducation(index)}>-</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>



                    </form>
                </div>
            </div>
        </section>
        </div>
      ))}
      <button type = "button" value = "Add" className = "repeater-add-btn" onClick={addEducation}>+</button>
                            

{/* --------------------------- Experieces Section ------------------------------ */}

      {experiences.map((experience, index) => (
        <div key={index}>
      <section id = "about-sc" className = "">
            <div className = "container">
                <div className = "about-cnt">
                    <form action="" class="cv-form" id = "cv-form">

                    <div class="cv-form-blk">
                            <div className = "cv-form-row-title">
                                <h3>experience</h3>
                            </div>

                            <div className = "row-separator repeater">
                                <div className = "repeater" data-repeater-list = "group-b">
                                    <div data-repeater-item>
                                        <div className = "cv-form-row cv-form-row-experience">
                                            <div className = "cols-3">
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Title</label>
                                                    <input name='title' type='text' className ='form-control exp_title' value={experience.title} onChange={(e) => handleInputChange(index, 'title', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Company / Organization</label>
                                                    <input name='organization' type='text' className ='form-control exp_organization' value={experience.organization} onChange={(e) => handleInputChange(index, 'organization', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Location</label>
                                                    <input name = "location" type = "text" className  = "form-control exp_location" id = "" value={experience.location} onChange={(e) => handleInputChange(index, 'location', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>

                                            <div className = "cols-3">
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Start Date</label>
                                                    <input name = "start" type = "date" className = "form-control exp_start_date" id = "" value={experience.startDate} onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">End Date</label>
                                                    <input name = "end" type = "date" className = "form-control exp_end_date" id = "" value={experience.endDate} onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Description</label>
                                                    <input name = "description" type = "text" className = "form-control exp_description" id = "" value={experience.description} onChange={(e) => handleInputChange(index, 'description', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>

                                            <button type = "button" className = "repeater-remove-btn" onClick={() => removeExperience(index)}>-</button>
                                        </div>
                                    </div>
                                </div>
                              </div>
                        </div>


                    </form>
                </div>
            </div>
        </section>
        </div>
      ))}
      <button type = "button" value = "Add" className = "repeater-add-btn" onClick={addExperience}>+</button>


       {/* ------------------------- Projects Section ------------------------------------ */}

       {project.map((project, index) => (
        <div key={index}>
          <section id = "about-sc" class = "">
            <div class = "container">
                <div class = "about-cnt">
                    <form action="" class="cv-form" id = "cv-form">

                    <div class="cv-form-blk">
                            <div class = "cv-form-row-title">
                                <h3>projects</h3>
                            </div>

                            <div class = "row-separator repeater">
                                <div class = "repeater" data-repeater-list = "group-d">
                                    <div data-repeater-item>
                                        <div class = "cv-form-row cv-form-row-experience">
                                            <div class = "cols-3">
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Project Name</label>
                                                    <input name = "title" type = "text" className = "form-control proj_title" id = "" value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Project link</label>
                                                    <input name = "link" type = "text" class = "form-control proj_link" id = "" value={project.link} onChange={(e) => handleProjectChange(index, 'link', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Description</label>
                                                    <input name = "desc" type = "text" class = "form-control proj_description" id = "" value={project.description} onChange={(e) => handleProjectChange(index, 'description', e.target.value)}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>
                                            <button type = "button" class = "repeater-remove-btn" onClick={() => removeProject(index)}>-</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>


                    </form>
                </div>
            </div>
        </section>
        </div>
        ))}
        <button type = "button" value = "Add" class = "repeater-add-btn" onClick={addProject}>+</button>


           <Skills skills={skills} onSkillsChange={handleSkillsChange} />                 


{/* ------------------------------ Preview Section ----------------------------- */}
      <section id="preview-sc" className ="print_area">
        <div className ="container">
          <div className ="preview-cnt">
            <div className ="preview-cnt-l bg-green text-white">
              <div className ="preview-blk">
                <div className ="preview-image">
                  {name.img}
                </div>
                <div className ="preview-item preview-item-name">
                  <span className ="preview-item-val fw-6" id="fullname_dsp">
                    {name.first} {name.middle} {name.last}
                  </span>
                </div>
                <div className ="preview-item">
                  <span
                    className ="preview-item-val text-uppercase fw-6 ls-1"
                    id="designation_dsp"
                  >
                    {name.designation}
                  </span>
                </div>
              </div>

              <div className ="preview-blk">
                <div className ="preview-blk-title">
                  <h3>about</h3>
                </div>
                <div className ="preview-blk-list">
                  <div className ="preview-item">
                    <span className ="preview-item-val" id="phoneno_dsp">
                      &#9742; {name.phoneno}
                    </span>
                  </div>
                  <div className ="preview-item">
                    <span className ="preview-item-val" id="email_dsp">
                      &#9993; {name.email}
                    </span>
                  </div>
                  <div className ="preview-item">
                    <span className ="preview-item-val" id="address_dsp">
                    <BiMap/> {name.address}
                    </span>
                  </div>
                  <div className ="preview-item">
                    <span className ="preview-item-val" id="summary_dsp">
                      <a href={name.portfolio} className ="text-blue-light" target="_blank"><CgWebsite/> {name.portfolio}</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className ="preview-blk">
                <div className ="preview-blk-title">
                  <h3>skills</h3>
                </div>
                <div className ="skills-items preview-blk-list" id="skills_dsp">
                  {skills.skills}
                  {/* <!-- skills list here --> */}
                </div>
              </div>
            </div>

            <div className ="preview-cnt-r bg-white">
              <div className ="preview-blk">
                <div className ="preview-blk-title">
                  <h3>Achievements</h3>
                </div>
                <div
                  className ="achievements-items preview-blk-list"
                  id="achievements_dsp"
                >
                  <div className ="preview-item">
                    <span className ="preview-item-val">{achiev.achiev}</span>
                    <span className ="preview-item-val">{achiev.desc}</span>
                    
                  </div>
                </div>
              </div>

              <div className ="preview-blk">
                <div className ="preview-blk-title">
                  <h3>educations</h3>
                </div>
                <div
                  className ="educations-items preview-blk-list"
                  id="educations_dsp"
                >
                  {education.map((education,index) => (
                    <div key={index}>
                  
                  <div className ="preview-item">
                    <span className ="preview-item-val">{education.school}</span>
                    <span className ="preview-item-val">{education.degree}</span>
                    <span className ="preview-item-val">{education.city}</span>
                    <span className ="preview-item-val">{education.startDate}</span>
                    <span className ="preview-item-val">{education.endDate}</span>
                    <span className ="preview-item-val">{education.description}</span>
                  </div>
                  </div>
                  ))}
                </div>
              </div>

              <div className ="preview-blk">
                <div className ="preview-blk-title">
                  <h3>experiences</h3>
                </div>
                <div
                  className ="experiences-items preview-blk-list"
                  id="experiences_dsp"
                >
                  {experiences.map((experience, index) => (
                  <div key={index}>
                  <div className ="preview-item">
                    <span className ="preview-item-val">{experience.title}</span>
                    <span className ="preview-item">{experience.organization}</span>
                    <span className ="preview-item">{experience.location}</span>
                    <span className ="preview-item">{experience.startDate}</span>
                    <span className ="preview-item">{experience.endDate}</span>
                    <span className ="preview-item">{experience.description}</span>
                  
                  </div>
                  </div>
                  ))}
                </div>
              </div>

              <div className ="preview-blk">
                <div className ="preview-blk-title">
                  <h3>projects</h3>
                </div>
                <div
                  className ="projects-items preview-blk-list"
                  id="projects_dsp"
                >
                  {project.map((project, index) => (
                    <div key={index}>
                      <div className ="preview-item">
                        <span className ="preview-item-val"><ul><li>{project.title}</li></ul></span>
                        <span className ="preview-item-val"><a href={project.link} target="_blank">{project.link}</a></span>
                        <span className ="preview-item-val">{project.description}</span>
                        </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className ="print-btn-sc">
        <div className ="container">
          <button
            type="button"
            className ="print-btn btn btn-primary"
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