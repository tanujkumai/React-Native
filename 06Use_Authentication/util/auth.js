import axios from "axios";

const API_KEY = "AIzaSyA_pACSBJjXfb8GXsfA5k0SVGgEH4DUpbs";

async function authenticate(email, password, mode) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  
  
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  
    console.log(response.data);
  }
  
  export async function createUser(email, password) {
    await authenticate('signUp', email, password);
  }
  
  export async function login(email, password) {
    await authenticate('signInWithPassword', email, password);
  }