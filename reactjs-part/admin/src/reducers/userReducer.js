import * as type from "../const/ActionTypes";
const initialState = {
    list: {
        users: [],
        total: 0,
        loading: false,
    },
    addUser: {
        loading: false,
        success: false,
        message: "",
    },
    getUser: {
        id: "",
        loading: false,
        success: false,
        message: "",
    },
};

export default function usersReducer(state = initialState, action = {}) {
    console.log("ACTION: ", action);
    switch (action.type) {
        case type.FETCH_USERS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true,
                },
            };
        case type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    users: action.payload.users,
                    total: action.payload.total,
                },
            };
        case type.FETCH_USERS_FAILED:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    users: [],
                },
            };
        case type.ADD_USER:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: true,
                    message: "",
                    success: false,
                },
            };
        case type.ADD_USER_SUCCESS:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: false,
                    message: action.payload.message,
                    success: true,
                },
            };
        case type.ADD_USER_FAILED:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: false,
                    message: action.payload.message,
                    success: false,
                },
            };
        case type.GET_USER:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: true,
                    success: false,
                    message: "",
                },
            };
        case type.GET_USER_SUCCESS:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: false,
                    message: "Get user success",
                    user: action.payload.user,
                    success: true,
                },
            };
        case type.GET_USER_FAILED:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: false,
                    message: "Get user failed",
                    success: false,
                },
            };
    }
    return state;
}
