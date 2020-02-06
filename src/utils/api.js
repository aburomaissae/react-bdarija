const BASE_URL = process.env.REACT_APP_BASE_URL;

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

