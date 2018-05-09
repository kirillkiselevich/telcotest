import React, {Component} from 'react'
import User from '../User/User'
import {connect} from 'react-redux';
import "./style.css"

class UserList extends Component {
    showList() {
        console.log(this.props.users.users);
        const users = this.props.users;
        console.log(users);
        return (users).map((user) => {
            return (
                <User key={user.id} user={user}/>
            );
        });
    }

    render() {
        return (
            <tbody>
            {this.showList()}
            </tbody>
        );
    }
}

function mapStateToProps(state) {
    function minmax(a, b) {
        return a.age - b.age;
    }
    function maxmin(a, b) {
        return b.age - a.age;
    }
    function abc(a, b) {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    }
    function cba(a, b) {
        if(a.name > b.name) return -1;
        if(a.name < b.name) return 1;
        return 0;
    }

    var result = [];
    var users = state.users.users;
    var s;
    var filter = state.filterValue.toLowerCase();
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        console.log("user", user);
        if (user.name.toLowerCase().includes(filter) ||
            user.age.toString().includes(filter)||
            user.email.toLowerCase().includes(filter) ||
            user.gender.toLowerCase().includes(filter)) {
            result.push(user);
        }
    }
    switch (state.sort){
        case "abc":
            s = abc;
            break;
        case "cba":
            s = cba;
            break;
        case "123":
            s = minmax;
            break;
        case "321":
            s = maxmin;
            break;
        default:
            s = abc;
    }
    result.sort(s);
    console.log("state", state.users.users.filter(users => users.name.includes(state.filterValue)));
    console.log("filted", result);
    return {
       // users: state.users.users.filter(users => users.name.includes(state.filterValue))
       users: result
    };
}

export default connect(mapStateToProps)(UserList);