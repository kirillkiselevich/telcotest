var id =  "5A6B00874B";
export const select = (user) => {
    //alert(user.name);
    return {
        type: "SELECT",
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
            age: "14",
            name: "Kirill Kiselevich",
            gender: "male",
            // company: "1488 studios",
            // email: "Qurubo@gmail.com",
            // phone: "+375259835900",
            // address: "dfgjkljsdfgkl;j;"
        }
    }
};