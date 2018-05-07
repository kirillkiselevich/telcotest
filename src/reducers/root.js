import users from "../users"
const initialState = {
    users: users
};
export default  function(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch (action.type){
        case "SELECT":
            alert("Select " + action.payload.name);
            return {...state,};
        case "DELETE":
            return {...state,users: state.users.filter(item => action.payload !== item)};
        case "ADD":
            return {...state,users: state.users.concat(action.payload)}
        default:
            return state;
    }
}