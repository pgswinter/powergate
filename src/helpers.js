import axios from 'axios';

const GET_TOKEN = () => {
  try {
    const accessToken = JSON.parse(window.localStorage.getItem('accessToken'));
    return accessToken;
  } catch (err) {
    return null;
  }
};

export const getHeaders = header => {
  return {
    Authorization: `bearer ${GET_TOKEN()}`,
    'Content-Type': 'application/json'
  };
};

export const request = (url, options) =>
  new Promise((resolve, reject) => {
    axios({
      url,
      ...options,
      headers: getHeaders(options.header)
    })
      .then(({ data }) => {
        if (data.type < 0) {
          reject(data);
        } else {
          resolve(data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
