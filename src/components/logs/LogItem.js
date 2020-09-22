import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, getLogs, setCurrentLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const LogItem = ({ log, deleteLog, setCurrentLog }) => {
  const onDeleteLog = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrentLog(log)}
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

        <a href='#!' className='secondary-content' onClick={onDeleteLog}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};
export default connect(null, { deleteLog, getLogs, setCurrentLog })(LogItem);
