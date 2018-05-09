import users from "../users"
const initialState = {
    users: users
};
export default  function(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch (action.type){
        case "EDIT":
            var users = state.users;
            for (var index = 0, len = users.length; index < len; ++index) {
                if (users[index].id === action.payload.id){
                    console.log(users[index])
                    users[index].name=action.payload.name;
                    users[index].age=action.payload.age;
                    users[index].email=action.payload.email;
                    users[index].gender=action.payload.gender;
                    if ("editable" in users[index]) {
                        delete users[index].editable;
                    }
                }
            }
            return {...state,users: users};
        case "DELETE":
            return {...state,users: state.users.filter(item => action.payload !== item)};
        case "ADD":
            return {...state,users: state.users.concat(action.payload)};
        default:
            return state;
    }
}