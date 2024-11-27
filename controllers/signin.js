import API_URI from "../config/global.js";


const signin = async (email, password) => {
  return await fetch(`${API_URI}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export default signin;

