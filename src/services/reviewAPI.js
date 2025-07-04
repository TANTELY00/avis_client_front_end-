import axios from 'axios';


const API_BASE_URLs = 'http://localhost:8000';
export async function postReview({ client_name, client_email, text }) {
  const response = await axios.post(`${API_BASE_URLs}/reviews/`, {
    client_name,
    client_email,
    text,
  });
  return response.data;
}

//const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//export async function postReview({ client_name, client_email, text }) {
  //const response = await axios.post(`${API_BASE_URL}/reviews/`, {
    //client_name,
    //client_email,
    //text,
  //});
  //return response.data;
//}

