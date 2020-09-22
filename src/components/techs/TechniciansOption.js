import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
export const TechniciansOption = ({ technician: { techs }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, [getTechs]);

  return !techs || techs.length === 0 ? (
    <option value='' disabled>
      No Technician
    </option>
  ) : (
    techs.map((tech) => (
      <option value={techs.id}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  technician: state.technician,
});

export default connect(mapStateToProps, { getTechs })(TechniciansOption);
