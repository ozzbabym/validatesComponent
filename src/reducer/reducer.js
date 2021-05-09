
export const reducer = (state, action) => {
    switch (action.type) {

        case 'SET_COUNT':
            return { ...state, [action.payload.label]: [action.payload.value, action.payload.count] }

        default:
            return state
        }
}
