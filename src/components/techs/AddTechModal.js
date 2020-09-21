import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onsubmit = () => {
    if (firstname || lastname) {
      console.log(firstname, lastname);
      setFirstname('');
      setLastname('');
    } else {
      M.toast({
        html: 'Please enter first and last name ',
      });
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstname'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              First name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Last name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onsubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
