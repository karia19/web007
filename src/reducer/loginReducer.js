
const userReducer = (state = '', action) => {

    switch (action.type) {
        case "user" :
            return action.data

            default:
                return state;
    }
}

export const logincontent = (data) => {
    return {
        type: 'user',
        data
    }
}

export default userReducer;