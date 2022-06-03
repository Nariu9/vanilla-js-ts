import React from 'react';
import './App.css';

function App() {
    const names = ['Alex', 'Alfred', 'Frank', 'Sarah', 'Hannah']
    const users = [{name: 'Alex'}, {name:'Alfred'}, {name:'Frank'}, {name:'Sarah'}, {name:'Hannah'}]
    const liElements = users.map((n, index) => <li key={index}>{n.name}</li>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
