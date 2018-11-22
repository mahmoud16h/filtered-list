const initialState = {}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MERCHANTS':
            console.log("PAYLOAD", action)
            return state
        default:
            return state
    }
}