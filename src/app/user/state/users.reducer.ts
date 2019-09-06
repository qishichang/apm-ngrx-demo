export function reducer(state, action) {
    switch (action.type) {
        case 'MARK_USER_NAME':
            return {
                ...state,
                markUserName: action.payload
            };
        default:
            return state;
    }
}
