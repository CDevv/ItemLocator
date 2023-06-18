import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import authService from './api-authorization/AuthorizeService';
import { Get } from '../Service.js';

function ShopCard(props) {
    const btnPath = `/shop/${props.id}`;
    return (
        <Card>
            <CardBody>
                <CardTitle tag='h5'>{props.name}</CardTitle>
                <CardText>{props.address}</CardText>
                <CardText>{props.openingHours}</CardText>
                <Button href={btnPath}>Visit Store Page</Button>
            </CardBody>
        </Card>
    );
}

export class ShopList extends Component {
    state = {
        shops: [],
        userId: "userId"
    }

    componentDidMount() {
        Get("Shops").then(items => this.setState({ shops: items }))
    }

    render() {
        return (
            <div>
                <h1>Shops</h1>
                {this.state.shops.map(s => 
                    
                    <ShopCard
                        id={s.id}
                        name={s.name}
                        address={s.address}
                        openingHours={s.openingHours}
                    ></ShopCard>
                )}
                
            </div>
        );
    }
}
