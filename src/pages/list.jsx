import React from 'react';
import PropTypes from 'prop-types';

import EditIcon from '../images/edit.png';
import DeleteIcon from '../images/delete.png';

const NotiList = ({ goTo }) => {
  const [list, setList] = React.useState([]);

  const refresh = () => {
    fetch('http://localhost:3030/notifications')
      .then(response => response.json())
      // .then( listNotifications => setList(listNotifications) ) 
      .then(setList);
  }

  React.useEffect(() => {
    refresh();
  }, [])

  const handleDelete = (_id) => {
    fetch(`http://localhost:3030/notifications/${_id}`, {method:'delete'})
    .then( () => {
      refresh();
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
            list.map((item) => (
              <tr key={item._id}>
                <td>
                  <img className="icon-button" onClick={() => handleDelete(item._id)} alt="" src={DeleteIcon} title="Delete the current notification" />
                  <img className="icon-button" onClick={() => alert('delelte')} alt="" src={EditIcon} title="Mark as read" />
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
