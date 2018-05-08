import React, {Component} from 'react'
import UserList from "../UserList/UserList";
import users from "../../users"

class Table extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped ">
                    <thead className="thead-dark">
                        <tr>
                            {/*<th scope="col">ID</th>*/}
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
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
}

export default Table