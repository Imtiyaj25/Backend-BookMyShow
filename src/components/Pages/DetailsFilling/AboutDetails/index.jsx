import React from 'react'

const About = ({ name, onNameChange }) => {
    const handleInputChange = (e) => {
        onNameChange({
          ...name,
          [e.target.name]: e.target.value
        });
      };

  return (
    <div><section id = "about-sc" class = "">
            <div class = "container">
                <div class = "about-cnt">
                    <form action="" class="cv-form" id = "cv-form">
                        <div class = "cv-form-blk">
                            <div class = "cv-form-row-title">
                                <h3>about section</h3>
                            </div>
                            <div class = "cv-form-row cv-form-row-about">
                                <div class = "cols-3">
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">First Name</label>
                                        <input name='first' type="text" id='first' placeholder='first name' value={name.first} onChange={handleInputChange} className='form-control'/>
                                        <span class="form-text"></span>
                                    </div>
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">Middle Name <span class = "opt-text">(optional)</span></label>
                                        <input name='middle' type='text' id='middle' placeholder='middle name' value={name.middle} onChange={handleInputChange} className='form-control'/>
                                        <span class="form-text"></span>
                                    </div>
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">Last Name</label>
                                        <input name='last' type="text" id='last' placeholder='last name' value={name.last} onChange={handleInputChange} className='form-control lastname'/>
                                        
                                        <span class="form-text"></span>
                                    </div>
                                </div>

                                <div class="cols-3">
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">Your Image</label>
                                        <input name = "img" type = "file" class = "form-control image" id = "" accept = "image/*" value={name.img} onChange={handleInputChange}/>
                                    </div>
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">Designation</label>
                                        <input name='designation' type="text" id='designation' placeholder='designation name' value={name.designation} onChange={handleInputChange} className='form-control' />
                                        <span class="form-text"></span>
                                    </div>
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">Address</label>
                                        <input name='address' type='text' id='address' placeholder='address' value={name.address} onChange={handleInputChange} className='form-control'/>
                                        <span class="form-text"></span>
                                    </div>
                                </div>

                                <div class = "cols-3">
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">Email</label>
                                        <input name='email' type='text' id='email' placeholder='email' value={name.email} onChange={handleInputChange} className='form-control'/>
                                        <span class="form-text"></span>
                                    </div>
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">Phone No:</label>
                                        <input name='phoneno' type='text' id='phoneno' placeholder='phone no' value={name.phoneno} onChange={handleInputChange} className='form-control'/>
                                        <span class="form-text"></span>
                                    </div>
                                    <div class = "form-elem">
                                        <label for = "" class = "form-label">Portfolio</label>
                                        <input name = "portfolio" type = "text" className = "form-control proj_link" id = "" value={name.portfolio} onChange={handleInputChange}/>
                                        <span class="form-text"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </section>

    </div>
  )
}

export default About