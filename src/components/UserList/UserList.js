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
    var result = [];
    var users = state.users.users;
    console.log("users", users.users);
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
    console.log("state", state.users.users.filter(users => users.name.includes(state.filterValue)));
    console.log("filted", result);
    return {
       // users: state.users.users.filter(users => users.name.includes(state.filterValue))
       users: result
    };
}

export default connect(mapStateToProps)(UserList);