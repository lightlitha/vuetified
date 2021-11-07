import "./bootstrap";

// Create axios instance
const service = window.axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 50000,
  headers: {
    Accept: "application/json",
  },
});

export default service;
