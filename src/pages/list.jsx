import React from 'react';
import PropTypes from 'prop-types';

import EditIcon from '../images/edit.png';
import DeleteIcon from '../images/delete.png';

import apiHeloer from '../utils/api';

const NotiList = ({ goTo }) => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    apiHeloer.DoRequest('http://localhost:3030/notifications')
    .then( setList );
  }, [])

  const handleEdit = (notification, idx) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    notification.status = "read";

    fetch(`http://localhost:3030/notifications/${notification._id}`, {
        method: 'PUT',
        body: JSON.stringify(notification),
        headers: myHeaders,
      } 
    ).then( () => {
      setList(
        [
          ...list.slice(0, idx),
          notification,
          ...list.slice(idx+1, list.length),
        ]
      )
    });
  }

  const handleDelete = (_id, idx) => {
    fetch(`http://localhost:3030/notifications/${_id}`, {method:'delete'})
    .then( () => {
      setList(
        [
          ...list.slice(0, idx),
          ...list.slice(idx+1, list.length),
        ]
      )
    });
  }

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
            list.map((item, idx) => (
              <tr key={item._id} style={{ background: item.status === 'unread' ? '#f5f5d1':'transparent' }}>
                <td>
                  <img className="icon-button" onClick={() => handleDelete(item._id, idx)} alt="" src={DeleteIcon} title="Delete the current notification" />
                  {
                    item.status === "unread" &&
                    <img className="icon-button" onClick={() => handleEdit(item, idx)} alt="" src={EditIcon} title="Mark as read" />
                  }
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
