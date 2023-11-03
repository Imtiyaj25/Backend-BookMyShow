import React from 'react'

const Education = ({ edu, onEduChange}) => {

    const handleInputChange = (e) => {

        onEduChange({
            ...edu,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div>
        <section id = "about-sc" class = "">
            <div class = "container">
                <div class = "about-cnt">
                    <form action="" class="cv-form" id = "cv-form">


                    <div class="cv-form-blk">
                            <div class = "cv-form-row-title">
                                <h3>education</h3>
                            </div>

                            <div class = "row-separator repeater">
                                <div class = "repeater" data-repeater-list = "group-c">
                                    <div data-repeater-item>
                                        <div class = "cv-form-row cv-form-row-experience">
                                            <div class = "cols-3">
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">School</label>
                                                    <input name = "school" type = "text" className = "form-control edu_school" id = "" onChange={handleInputChange} value={edu.school}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Degree</label>
                                                    <input name = "degree" type = "text" class = "form-control edu_degree" id = "" onChange={handleInputChange} value={edu.degree}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">City</label>
                                                    <input name = "city" type = "text" class = "form-control edu_city" id = "" onChange={handleInputChange} value={edu.city}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>

                                            <div class = "cols-3">
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Start Date</label>
                                                    <input name = "start" type = "date" class = "form-control edu_start_date" id = "" onChange={handleInputChange} value={edu.start}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">End Date</label>
                                                    <input name = "end" type = "date" class = "form-control edu_graduation_date" id = "" onChange={handleInputChange} value={edu.end}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Description</label>
                                                    <input name = "desc" type = "text" class = "form-control edu_description" id = "" onChange={handleInputChange} value={edu.desc}/>
                                                    <span class="form-text"></span>
                                                </div>
                                            </div>

                                            <button data-repeater-delete type = "button" class = "repeater-remove-btn">-</button>
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

export default Education