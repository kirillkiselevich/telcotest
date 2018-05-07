import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select,del} from "../../actions/actions";

class User extends Component {


    render() {
        const {user} = this.props;
        return (
            <tr>
                    <td><input type="text" value={user.id}/></td>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                    {/*<td>{user.company}</td>*/}
                    {/*<td>{user.email}</td>*/}
                    {/*<td>{user.phone}</td>*/}
                    {/*<td>{user.address}</td>*/}
                    <td>
                        <button className="btn btn-primary" onClick={()=> this.props.select(user)}>Save</button>
                        <button className="btn btn-danger float-right" onClick={()=> this.props.del(user)}>Delete</button>
                    </td>
            </tr>
        );
    }
}


function mapStateToProps (state){
    return {
        users: state.users
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select,del: del},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(User);