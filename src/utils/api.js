const BASE_URL = 'http://localhost:3030';

export default {
  DoRequest: (url, options = {}) => new Promise((resolve, reject) => {

    options.headers = new Headers();
    options.headers.append("Content-Type", "application/json");

    fetch(BASE_URL + url, options)
      .then(response => {
        return response.json();
      })
      .then(resolve);
  })
};



