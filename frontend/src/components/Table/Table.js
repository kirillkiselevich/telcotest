import React, {Component} from 'react'
import UserList from "../UserList/UserList";
import users from "../../users"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sort} from "../../actions/actions";

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortName: "abc",
            sortAge: ""
        };
    }

    render() {
        return (
            <div>
                <table className="table table-striped ">
                    <thead className="thead-dark">
                    <tr>
                        {/*<th scope="col">ID</th>*/}
                        <th scope="col" onClick={this.sortName}>{!(this.state.sortName.localeCompare("abc"))? "Name↑" :
                            !(this.state.sortName.localeCompare("cba")) ? "Name↓" : "Name" }</th>
                        <th scope="col">Gender</th>
                        <th scope="col" onClick={this.sortAge}>{!(this.state.sortAge.localeCompare(""))? "Age" :
                            !(this.state.sortAge.localeCompare("321")) ? "Age↓" : "Age↑" }</th>
                        {/*<th scope="col">Company</th>*/}
                        <th scope="col">Email</th>
                        {/*<th scope="col">Phone</th>*/}
                        {/*<th scope="col">Address</th>*/}
                        <th scope="col" className="float-center">Action</th>
                    </tr>
                    </thead>
                    <UserList users={users}/>
                </table>
            </div>
        );
    }

    sortName = () => {
        if (this.state.sortName === "abc") {
            this.props.sort("cba");
            this.setState({
                sortName: "cba",
                sortAge: ""
            });
        } else {
            this.props.sort("abc");
            this.setState({
                sortName: "abc",
                sortAge: ""
            });
        }
    };
    sortAge = () => {
        console.log("age",this.state.sortAge)
        if (!this.state.sortAge.localeCompare("123")) {
            this.props.sort("321");
            this.setState({
                sortName: "",
                sortAge: "321"
            });
        } else {
            this.props.sort("123");
            this.setState({
                sortName: "",
                sortAge: "123"
            });
        }
    };
}

function mapStateToProps(state) {
    return {
        sort: state
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({sort: sort}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Table);
