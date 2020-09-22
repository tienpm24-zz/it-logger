import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');

  const onsubmit = () => {
    if (firstName !== '' || lastName !== '') {
      const newTech = {
        firstName,
        lastName,
      };
      addTech(newTech);
      M.toast({
        html: 'New technician has been added',
      });
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
              name='firstName'
              value={firstName}
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
              name='lastName'
              value={lastName}
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

export default connect(null, { addTech })(AddTechModal);
