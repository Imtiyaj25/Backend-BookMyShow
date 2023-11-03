import React, { useState } from 'react'

const Experience = ({ exp, onExpChange }) => {

    const handleInputChange = (e) => {


        onExpChange({
            ...exp,
            [e.target.name]: e.target.value
        })
    }

    const [items, setItems] = useState(['']); // State to manage the items

  // Function to add a new item
  const addItem = () => {
    setItems([...items, '']);
  };

  // Function to remove an item at a specific index
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    generateCV(); // Call your generateCV function here if needed
  };

  // Function to update the value of an item
  const updateItemValue = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  // Function to generate CV (modify this according to your requirements)
  const generateCV = () => {
    // Implement your CV generation logic here
    // This function is called when an item is removed
    // You should replace it with your actual CV generation logic.
  };


  return (
    <div>
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
    </div>
  )
}

export default Experience