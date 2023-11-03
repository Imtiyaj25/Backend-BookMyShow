import React from 'react'

const Projects = ({ proj, onProjChange }) => {

    const handleInputChange = (e) => {

        onProjChange({
            ...proj,
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
                                <h3>projects</h3>
                            </div>

                            <div class = "row-separator repeater">
                                <div class = "repeater" data-repeater-list = "group-d">
                                    <div data-repeater-item>
                                        <div class = "cv-form-row cv-form-row-experience">
                                            <div class = "cols-3">
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Project Name</label>
                                                    <input name = "title" type = "text" className = "form-control proj_title" id = "" value={proj.title} onChange={handleInputChange}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Project link</label>
                                                    <input name = "link" type = "text" class = "form-control proj_link" id = "" value={proj.link} onChange={handleInputChange}/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Description</label>
                                                    <input name = "desc" type = "text" class = "form-control proj_description" id = "" value={proj.desc} onChange={handleInputChange}/>
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

export default Projects