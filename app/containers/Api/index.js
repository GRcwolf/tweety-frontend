import axios from 'axios';

const apiPath = 'http://localhost:3000';

export const createUser = ({
  firstname,
  lastname,
  username,
  email,
  password,
}) =>
  axios
    .post(`${apiPath}/createUser`, {
      firstname,
      lastname,
      username,
      email,
      password,
    })
    .then(response => response.data);

export const checkUsername = username =>
  axios
    .get(`${apiPath}/checkUsername`, { username })
    .then(response => response.data);

export const checkEmail = email =>
  axios.get(`${apiPath}/checkEmail`, { email }).then(response => response.data);

export const getUser = username =>
  axios.get(`${apiPath}/getUser`, { username }).then(response => response.data);

export const loginWithEmail = ({ email, password }) =>
  axios
    .post(`${apiPath}/login`, { email, password })
    .then(response => response.data);

export const loginWithUsername = ({ username, password }) =>
  axios
    .post(`${apiPath}/login`, { username, password })
    .then(response => response.data);

export const getActiveTopic = () =>
  axios.get(`${apiPath}/getActiveTopic`).then(response => response.data);

export const createTweet = content =>
  axios.post(`${apiPath}/post`, { content }).then(response => response.data);
