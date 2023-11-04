import React from 'react'

const Achievements = ({ achiev, onAchievChange }) => {
    const handleInputChange = (e) => {
        onAchievChange({
            ...achiev,
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
                                <h3>achievements</h3>
                            </div>

                            <div class = "row-separator repeater">
                                <div class = "repeater" data-repeater-list = "group-a">
                                    <div data-repeater-item>
                                        <div class = "cv-form-row cv-form-row-achievement">
                                            <div class = "cols-2">
                                                <div class = "form-elem">
                                                    <label for = "" class = "form-label">Title</label>
                                                    <input name='achiev' type='text' id='' placeholder='achievements' value={achiev.achiev} onChange={handleInputChange} className='form-control achieve_title'/>
                                                    <span class="form-text"></span>
                                                </div>
                                                <div >
                                                    <label for = "" class = "form-label">Description</label>
                                                    <input name='desc' type='text' id='' placeholder='description' value={achiev.desc} onChange={handleInputChange} className='form-control achieve_description'/>
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

export default Achievements