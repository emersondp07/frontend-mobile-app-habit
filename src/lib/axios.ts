import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.31.133.21:3333'
})

