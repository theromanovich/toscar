import React from 'react';
import axios from 'axios';

import './PersonList.css';


class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.persons
                        .map(person =>
                            <li key={person.id}>name: {person.name}, emal:{person.email} </li>
                        )
                }
            </ul>
        )
    }
}

export default PersonList;
