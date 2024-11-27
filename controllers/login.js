import API_URI from "../config/global.js";

async function login(token) {
  try {
    const response = await fetch(`${API_URI}/home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response Data:", data);
    return data;
  } catch (error) {
    console.error("Error during login:", error.message);
    return { error: error.message }; // Return a structured error response
  }
}
export default login;
