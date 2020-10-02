const API_ROOT = `http://localhost:3000/api/v1`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearers ${token}`,
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
  }).then((res) => res.json());
  // .then(data => console.log(data, "in api.js"))
  // .then((data) => {
  //   localStorage.setItem("token", data.jwt);
  // });
};

const signup = (newUser) => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user: newUser }),
  }).then((res) => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers,
  }).then((res) => res.json());
};

const patchRequestStatus = (requestStatus, id) => {
  console.log(requestStatus);
  return fetch(`${API_ROOT}/requests/${id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ status: requestStatus }),
  }).then((res) => res.json());
};
const patchUserProfile = (userProfile, id) => {
  console.log(userProfile);
  return fetch(`${API_ROOT}/users/${id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ user: userProfile }),
  }).then((res) => res.json());
};

const postNewServiceOffering = (newService) => {
  console.log(newService);
  return fetch(`${API_ROOT}/services/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ service: newService }),
<<<<<<< HEAD
  })
    .then((res) => res.json())
}

const handleDeleteButton = (id) =>{
  // console.log(myUser)
  fetch(`http://localhost:3000/api/v1/users/${id}`,{
    method: 'DELETE',
    headers: headers,
  })
}

=======
  }).then((res) => res.json());
};
>>>>>>> 45be324583566480cc02e133d657e1c9ed91177a

export default {
  auth: {
    login: login,
    getCurrentUser: getCurrentUser,
    signup: signup,
  },
  services: {
    getServices,
  },
  requests: {
    getRequests,
    patchRequestStatus,
  },
  posts: {
    postNewServiceOffering,
  },
  users: {
<<<<<<< HEAD
    handleDeleteButton
  }

=======
    patchUserProfile,
  },
>>>>>>> 45be324583566480cc02e133d657e1c9ed91177a

};
