import axios from "axios";
const auth = {
    login: (data) => {
        // console.log("data", data);
        return axios.post("localhost:8080/api/login");
    },
};

export default auth;
