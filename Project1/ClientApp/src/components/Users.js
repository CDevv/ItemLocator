import React, { Component } from 'react';

export class Users extends Component {

    state = {
          list: []
    }

    getUsers() {
        //const response = await fetch('api/Users');
        //const data = response.json();
        //console.log(data);
    }

componentDidMount() {
    this.getUsers();
}

    render() {
        return (
          <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

                
          </div>
        );
    }
}
