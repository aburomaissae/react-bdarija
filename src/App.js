import React from 'react';
// import PropTypes from 'prop-types';

function App() {
  const [formData, setFormData] = React.useState({
    emitter: '',
    text: '',
    status: 'unread', // Should be in BE
  });

  const [loading, setLoading] = React.useState( false );

  const handleChange = (name) => (evt) => {
    setFormData({
      ...formData,
      [name]: evt.target.value,
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading( true );

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch('http://localhost:3030/notifications',
      {
        method: 'POST',
        body: JSON.stringify( formData ),
        headers: myHeaders,
      }
    ).then( (resp) => resp.json() )
    .then( (result) => {
      setFormData({
        emitter: '',
        text: '',
        status: 'unread', // Should be in BE
      })
      setLoading(false)
      console.log( result );
      debugger;
    })
  }

  return (
    <div className="container">
      <h2>Notifcations</h2>
      <h5>Creator Form</h5>
      { loading && <p style={{color: 'orangered'}}>Your notification is being processed, please wait...</p> }
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
              onChange={handleChange( 'emitter' )}
            >
              <option></option>
              <option>Azzeddine</option>
              <option>Larbi</option>
            </select>
            <label>Notification Text</label>
            <textarea
              required
              disabled={loading}
              value={formData.text} 
              onChange={handleChange('text')}
              className="u-full-width" />
            <button type="submit" disabled={loading} className="u-pull-right">Sumbit</button>
          </form>
        </div>
      }
    </div>
  );
}

export default App;
