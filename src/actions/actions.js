var id =  "5A6B00874B";
export const edit = (user) => {
    //alert(user.name);
    return {
        type: "EDIT",
        payload: user
    }
};

export const del = (user) => {
    //alert("DELETE " + user.name);
    return {
        type: "DELETE",
        payload: user
    }
};
export const add = () => {
    //alert("ADD User ");
    var num = Number.parseInt(id,16)+1;
    id =num.toString(16);
    return {
        type: "ADD",
        payload: {
            id: id,
            age: "",
            name: "",
            gender: "",
            // company: "1488 studios",
            email: "",
            editable: true
            // phone: "+375259835900",
            // address: "dfgjkljsdfgkl;j;"
        }
    }
};
export const find = (value) => {
    //alert("DELETE " + user.name);
    return {
        type: "FIND",
        payload: value
    }
};