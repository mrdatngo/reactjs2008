import axios from "axios";

const BaseApi = process.env.REACT_APP_BASE_API;

export default {
    fetchUsers: (data) =>
        axios.get(
            `${BaseApi}/api/users?key=${data.key}&page=${data.current}&pageSize=${data.pageSize}`
        ),
    addUser: (data) => axios.post(`${BaseApi}/api/users/add`, data),
    getUser: (id) => axios.get(`${BaseApi}/api/users/get?id=${id}`),
};
