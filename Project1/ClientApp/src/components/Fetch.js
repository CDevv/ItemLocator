import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import { Get } from '../Service.js';

export class Fetch extends Component {
    state = {
        items: [],
        userId: "userId"
    }

    componentDidMount() {
        Get("Items").then(items => this.setState({ items: items }))
        authService.getUser().then(user => {
            console.log(user);
            this.setState({userId: user.sub});
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <p>Fetching data component</p>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {this.state.items.map(p => 
                            <tr key={p.id}>
                                <td>{p.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {this.state.userId}
            </div>
        );
    }
}
