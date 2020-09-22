import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, getLogs } from '../../actions/logActions';

const LogItem = ({ log, deleteLog, getLogs }) => {
  const onDeleteLog = (id) => {
    deleteLog(id);
    getLogs();
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span>{' '}
          <span> last updated by {''}</span>
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMM Do YYYY,h:mm:ss a'>{log.date}</Moment>
        </span>

        <a
          href='#!'
          className='secondary-content'
          onClick={() => onDeleteLog(log.id)}
        >
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};
export default connect(null, { deleteLog, getLogs })(LogItem);
