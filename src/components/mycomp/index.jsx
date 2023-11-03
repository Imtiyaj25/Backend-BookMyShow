// import React from 'react';

// function MyComponent({ name, onNameChange }) {
//   const handleInputChange = (e) => {
//     onNameChange({
//       ...name,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="First Name"
//         name="first"
//         value={name.first}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         name="last"
//         value={name.last}
//         onChange={handleInputChange}
//       />
//       <p>First Name: {name.first}</p>
//       <p>Last Name: {name.last}</p>
//     </div>
//   );
// }

// export default MyComponent;


import React, { useState } from 'react';

function ExperiencesForm({ onExpChange }) {
  // function onExpChange(e) {
    
  // }
  // Define the initial state to store user inputs
  const [exp, setExp] = useState([
    {
      title: '',
      organization: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const handleInputChange = (e, index, field, value) => {
    onExpChange({
            ...exp,
            [e.target.name]: e.target.value
          });
    // Create a copy of the exp array to avoid mutating state directly
    const updatedExp = [...exp];

    // Update the specific field of the experience at the given index
    updatedExp[index][field] = value;

    // Update the state with the new array
    setExp(updatedExp);
  };

  const addExperience = () => {
    // Add a new empty experience to the array
    setExp([...exp, {}]);
  };

  const removeExperience = (index) => {
    // Remove the experience at the specified index
    const updatedExp = exp.filter((_, i) => i !== index);
    setExp(updatedExp);
  };

  return (
    <div>
      {exp.map((exp, index) => (
        <div key={index}>
        
        <section id = "about-sc" class = "">
            <div class = "container">
                <div class = "about-cnt">
                    <form action="" class="cv-form" id = "cv-form">

                    <div class="cv-form-blk">
                            <div class = "cv-form-row-title">
                                <h3>experience</h3>
                            </div>

                            <div class = "row-separator repeater">
                                <div class = "repeater" data-repeater-list = "group-b">
                                    <div data-repeater-item>
                                        <div class = "cv-form-row cv-form-row-experience">
                                            <div class = "cols-3">
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Title</label>
                                                    <input name='title' type='text' className='form-control exp_title' value={exp.title} onChange={handleInputChange}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Company / Organization</label>
                                                    <input name='organization' type='text' className='form-control exp_organization' value={exp.organization} onChange={handleInputChange}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Location</label>
                                                    <input name = "location" type = "text" className = "form-control exp_location" id = "" value={exp.location} onChange={handleInputChange}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>

                                            <div class = "cols-3">
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Start Date</label>
                                                    <input name = "start" type = "date" class = "form-control exp_start_date" id = "" value={exp.start} onChange={handleInputChange}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">End Date</label>
                                                    <input name = "end" type = "date" class = "form-control exp_end_date" id = "" value={exp.end} onChange={handleInputChange}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Description</label>
                                                    <input name = "desc" type = "text" class = "form-control exp_description" id = "" value={exp.desc} onChange={handleInputChange}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>

                                            <button data-repeater-delete type = "button" class = "repeater-remove-btn" >-</button>
                                        </div>
                                    </div>
                                </div>
                                <button type = "button" data-repeater-create value = "Add" class = "repeater-add-btn">+</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </section>
    
          <button onClick={() => removeExperience(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}

export default ExperiencesForm;
