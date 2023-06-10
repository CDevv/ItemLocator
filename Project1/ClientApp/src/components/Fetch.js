import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import { Get } from '../Service.js';

export class Fetch extends Component {
    state = {
        items: [],
        userId: 0
    }

    componentDidMount() {
        Get("Items").then(items => this.setState({ items: items }))
        Get("Users/current").then(userId => console.log(userId))
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
