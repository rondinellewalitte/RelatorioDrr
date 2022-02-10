import axios from 'axios';

export const api = axios.create({
  baseURL: '/',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Authorization": 'Token token="2481802b484aa38e22cf5956eb7d5dcb"'
  }
})