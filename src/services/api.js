const API_ROOT = `http://localhost:3000/api/v1`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: token,
};

const getServices = () => {
  return fetch(`${API_ROOT}/services/`, { headers: headers }).then((res) =>
    res.json()
  );
};

const getRequests = () => {
  return fetch(`${API_ROOT}/requests/`, { headers: headers }).then((res) =>
    res.json()
  );
};

const login = (email, password) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.jwt);
    });
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers,
  }).then((res) => res.json());
};

export default {
  auth: {
    login: login,
    getCurrentUser: getCurrentUser,
  },
  services: {
    getServices,
  },
  requests: {
    getRequests,
  }
};
