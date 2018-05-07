import React, {Component} from 'react'
import Table from '../Table/Table'
import ButtonAdd from '../ButtonAdd/ButtonAdd'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
    render(){
        return (
            <div className="container">
                <h1>TelcoTest</h1>
                <Table/>
                <ButtonAdd/>
            </div>
        );
    }
}

export default App