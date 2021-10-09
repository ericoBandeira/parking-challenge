import axios from "axios";

const apiParking = axios.create({
  baseURL: "https://parking-lot-to-pfz.herokuapp.com/parking",
});

export { apiParking };
