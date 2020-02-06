export default {
  DoRequest: (url, options = {}) => new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        return response.json();
      })
      .then(resolve);
  })
};



