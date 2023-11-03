import React from 'react'

const Skills = ({ skills, onSkillsChange }) => {
    const handleInputChange = (e) => {
        onSkillsChange({
            ...skills,
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
                                <h3>skills</h3>
                            </div>

                            <div class = "row-separator repeater">
                                <div class = "repeater" data-repeater-list = "group-e">
                                    <div data-repeater-item>
                                        <div class = "cv-form-row cv-form-row-skills">
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Skill</label>
                                                <input name='skills' type='text' id='skills' placeholder='skills' value={skills.skill} onChange={handleInputChange} className='form-control skill'/>
                                                <span class="form-text"></span>
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

export default Skills