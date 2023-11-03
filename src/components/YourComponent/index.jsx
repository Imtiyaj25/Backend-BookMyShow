import React from 'react';

class YourComponent extends React.Component {
  getUserInputs = () => {
    let expTitleElem = document.querySelectorAll('.exp_title'),
      expOrganizationElem = document.querySelectorAll('.exp_organization'),
      expLocationElem = document.querySelectorAll('.exp_location'),
      expStartDateElem = document.querySelectorAll('.exp_start_date'),
      expEndDateElem = document.querySelectorAll('.exp_end_date'),
      expDescriptionElem = document.querySelectorAll('.exp_description');
    // Perform necessary operations with these elements
  };

  render() {
    return (
      <div>
        {/* Your JSX code here */}
        <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>experiences</h3>
                </div>
                <div
                  class="experiences-items preview-blk-list"
                  id="experiences_dsp"
                ></div>
              </div>
      </div>
    );
  }
}

export default YourComponent;
