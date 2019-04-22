import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID aa617d8dddce2c6f63d18cffdfb8da2dbe726febde88cb3e1bfcd3aa7cb81937"
  }
});
