import axios from "axios";

export default {
    // login: (data) => axios.post("http://localhost:8080/api/login", data),
    login: (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.username === "admin") {
                    resolve({
                        success: true,
                        username: "admin",
                        token: "fetch_token",
                    });
                } else {
                    reject({ success: false });
                }
            }, 500);
        });
    },
    logout: () => {},
    register: () => {},
};
