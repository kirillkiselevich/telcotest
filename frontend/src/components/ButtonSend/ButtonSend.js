import React,{Component} from "react";
import axios from 'axios';
import {store} from '../../store/store';

class ButtonSend extends Component{
    render(){
        return (
            <button className="btn btn btn-info" onClick={()=> this.sendData()}>Send</button>
        );

    }
    sendData = () => {
        var result = [];
        var users = store.getState().users.users;
        for (var i = 0; i < users.length; i++) {
            result.push(users[i]);
        }
        var Json = JSON.stringify(users);
        axios.post('http://localhost:8080/',Json)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export default ButtonSend;