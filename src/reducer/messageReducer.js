

const messageReducer = (state = '', action) => {

    switch (action.tyoe) {
        case "message" :
            return action.data

            default:
                return state;
    }

}

export const messaContent = (data) => {
    return {
        type: "message",
        data
    }
}

export default messageReducer;