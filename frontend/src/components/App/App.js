import React, {Component} from 'react';
import Table from '../Table/Table';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import ButtonSend from '../ButtonSend/ButtonSend';
import SearchForm from '../SearchForm/SearchForm'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 className="navbar-brand h1">TelcoTest</h1>
                </nav>
                <div className="container">
                    <SearchForm/>
                    <Table/>
                    <div className="container">
                        <ButtonSend/>
                        <div className="float-right">
                            <ButtonAdd/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App