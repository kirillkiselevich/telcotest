const initialState = "";

export default function filterValue(state = initialState, action) {
    if (action.type === 'FIND') {
        return action.payload;
    }
    return state;
}