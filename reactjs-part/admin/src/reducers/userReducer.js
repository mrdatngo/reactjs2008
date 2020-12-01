const initialState = {
    list: {
        users: [],
        loading: false,
    },
};

export default function usersReducer(state = initialState, action = {}) {
    console.log("ACTION: ", action);
    switch (action.type) {
    }
    return state;
}
