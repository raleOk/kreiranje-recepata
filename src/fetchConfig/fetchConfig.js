import randomToken from "random-token";

const token = randomToken(40);

const fetchConfig = {
  url: "http://localhost:8000/users",
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  },
  body: null,
};

export default fetchConfig;
