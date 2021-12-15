import randomToken from "random-token";

const token = randomToken(40);

const urls = ["http://localhost:8000/users", "http://localhost:8080/recipes"];

const fetchConfig = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  },
  body: null,
};

export { fetchConfig, urls };
