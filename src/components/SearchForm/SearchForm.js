import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './styles.css'
import {find} from "../../actions/actions";

class SearchForm extends Component {
    render() {
        return (
            <div className="mx-auto center_div">
                <div className="form-row">
                    <br/>
                    <input type="text" className="form-control input" placeholder="Input text to search"
                           ref="name" defaultValue={this.props.filterValue.value} onChange={() => {this.findValue();}}/>
                    <br/>
                </div>
            </div>
        );
    }
    findValue = () => {
        var value = this.refs.name.value;
        this.props.find(value);
    };
}
function mapStateToProps(state) {
    return {
        filterValue: state
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({find: find}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchForm);