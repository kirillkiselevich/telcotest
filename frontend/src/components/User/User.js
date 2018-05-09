import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {edit, del} from "../../actions/actions";

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        };
    }

    render() {
        const {user} = this.props;
        console.log(user.editable);
        if (!this.state.isEditable&&!user.editable) {
            return (
                <tr>
                    {/*<td>{user.id}</td>*/}
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                    {/*<td>{user.company}</td>*/}
                    <td>{user.email}</td>
                    {/*<td>{user.phone}</td>*/}
                    {/*<td>{user.address}</td>*/}
                    <td>
                        <button className="btn btn-success" onClick={this.editUser}>Edit</button>
                        <button className="btn btn-danger float-right" onClick={() => this.props.del(user)}>Delete
                        </button>
                    </td>
                </tr>
            );
        }
        return (
            <tr>
                <td><input type="text" defaultValue={user.name} className="form-control" ref="name"/></td>
                <td><input type="text" defaultValue={user.gender} className="form-control" ref="gender"/></td>
                <td><input type="number" defaultValue={user.age} className="form-control" ref="age" min={0}/></td>
                <td><input type="text" defaultValue={user.email} className="form-control" ref="email"/></td>
                <td>
                    <button className="btn btn-primary" onClick={() => {this.editedUser(user);}}>Save</button>
                    <button className="btn btn-danger float-right" onClick={() => this.props.del(user)}>Delete</button>
                </td>
            </tr>
        );

    }
    editUser = () => {
        this.setState({
            isEditable: !this.state.isEditable
        });
    };
    editedUser = (u) => {
        console.log(u);
        if(u.editable){
            this.setState({
                isEditable: false
            });
        }else{
            this.editUser();
        }

        var user = {
            id: u.id,
            age: this.refs.age.value,
            name: this.refs.name.value,
            gender: this.refs.gender.value,
            email: this.refs.email.value
        };
        this.props.edit(user);
    };

}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({edit: edit, del: del}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(User);