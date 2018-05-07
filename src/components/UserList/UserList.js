import React,{Component} from 'react'
import User from '../User/User'
import {connect} from 'react-redux';
import "./style.css"

class UserList extends Component{
    showList() {
        console.log(this.props.users);
        const users = this.props.users;
        console.log(users);
        return (this.props.users).map((user) =>{
            return(
                <User key={user.id} user={user}/>
            );
        });
    }
    render(){
        return(
            <tbody>
            {this.showList()}
            </tbody>
        );
    }
}

function mapStateToProps (state){
    return {
        users: state.users
    };
}
export default connect(mapStateToProps)(UserList);