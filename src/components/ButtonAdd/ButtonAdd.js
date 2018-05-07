import React,{Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from "../../actions/actions";

class ButtonAdd extends Component{
    render(){
        return (
            <button className="btn btn-success" onClick={()=> this.props.add()}>Add</button>
        );

    }
}

function mapStateToProps (state){
    return {
        users: state.users
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({add: add},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(ButtonAdd);