import React from 'react';
import PropTypes from 'prop-types';

const NotiList = ({ goTo }) => {
  return (
    <div>
      <h5>List of Notifications</h5>
      <p>This is the list of notification existing in the datatabse</p>
      <button
        onClick={() => goTo('form')}
        className="u-pull-right">
        Add new Notification
      </button>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Text</th>
            <th>Emitter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem Ipsum</td>
            <td>Azzeddine</td>
          </tr>
          <tr>
            <td>Lorem Ipsum</td>
            <td>Larbi</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

NotiList.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default NotiList;
