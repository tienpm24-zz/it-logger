import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ technician: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, [getTechs]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4> Technician List</h4>
        <ul className='collection'>
          {(!loading && !techs) || techs.length === 0 ? (
            <p className='center'>No technicians to show...</p>
          ) : (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  technician: state.technician,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
