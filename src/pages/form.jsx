import React from 'react';
import PropTypes from 'prop-types';
import apiHelper from '../utils/api';


const NotiForm = (props) => {
  const [loading, setLoading] = React.useState(false);

  const [formData, setFormData] = React.useState({
    emitter: '',
    text: '',
    status: 'unread', // Should be in BE
  });

  const handleChange = (name) => (evt) => {
    setFormData({
      ...formData,
      [name]: evt.target.value,
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);

    apiHelper.DoRequest('/notifications',
      {
        method: 'POST',
        body: JSON.stringify(formData),
      }
    ).then((result) => {
      setFormData({
        emitter: '',
        text: '',
        status: 'unread', // Should be in BE
      })
      setLoading(false);
      props.goTo('list');
    })
  }

  return (
    <div>
      <h5>Creator Form</h5>
      {loading && <p style={{ color: 'orangered' }}>Your notification is being processed, please wait...</p>}
      {
        !loading &&
        <div>
          <p>The following form allows you to create new notifications</p>
          <form onSubmit={handleSubmit}>
            <label>Notifcation Emitter</label>
            <select
              disabled={loading}
              value={formData.emitter}
              className="u-full-width"
              required
              onChange={handleChange('emitter')}
            >
              <option></option>
              <option>Azzeddine</option>
              <option>Hamza</option>
              <option>Larbi</option>
            </select>
            <label>Notification Text</label>
            <textarea
              required
              disabled={loading}
              value={formData.text}
              onChange={handleChange('text')}
              className="u-full-width" />
            <button type="submit" disabled={loading} className="btn button-primary u-pull-right">Sumbit</button>
            <button
              type="button"
              onClick={() => props.goTo('list')}
              disabled={loading}
              className="btn u-pull-right">Cancel</button>
          </form>
        </div>
      }
    </div>
  )
}

NotiForm.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default NotiForm;
