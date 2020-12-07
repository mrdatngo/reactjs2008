import * as type from "../const/ActionTypes";
const initialState = {
    list: {
        users: [],
        total: 0,
        loading: false,
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
    }
    return state;
}
