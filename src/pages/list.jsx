import React from 'react';
import PropTypes from 'prop-types';

import EditIcon from '../images/edit.png';
import DeleteIcon from '../images/delete.png';

const NotiList = ({ goTo }) => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3030/notifications')
      .then(response => response.json())
      // .then( listNotifications => setList(listNotifications) ) 
      .then(setList);
  }, [])

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
            <th><small>Actions</small></th>
            <th>Text</th>
            <th>Emitter</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item) => (
              <tr key={item._id}>
                <td>
                  <img className="icon-button" onClick={() => alert('edit')} alt="" src={EditIcon} />
                  <img className="icon-button" onClick={() => alert('delelte')} alt="" src={DeleteIcon} />
                </td>
                <td>{item.text}</td>
                <td>{item.emitter}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

NotiList.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default NotiList;
