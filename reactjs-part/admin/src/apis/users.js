import axios from "axios";

export default {
    fetchUsers: (data) => axios.get("http://localhost:8080/api/users"),
};
