const initialState = "abc";

export default function filterValue(state = initialState, action) {
    if (action.type === 'SORT') {
        return action.payload;
    }
    return state;
}