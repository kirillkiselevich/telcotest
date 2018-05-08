import React, {Component} from 'react';
import Table from '../Table/Table';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import SearchForm from '../SearchForm/SearchForm'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
    render(){
        return (
            <div className="container ">
                <h1>TelcoTest</h1>
                <SearchForm/>
                <Table/>
                <ButtonAdd/>
            </div>
        );
    }
}

export default App