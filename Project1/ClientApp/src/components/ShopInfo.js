import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText, Button, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
import authService from './api-authorization/AuthorizeService';
import { GetById } from '../Service.js';

export class ShopInfo extends Component {
    state = {
        shopData: [],
        userId: "userId",
        activeTab: '1'
    }

    componentDidMount() {
        const shopId = window.location.href.split('/')[4];
        GetById("Shops", shopId).then(shop => this.setState({ shopData: shop }))
        authService.getUser().then(user => {
            console.log(user);
            this.setState({userId: user.sub});
        })
    }

    changeTab(n) {
        this.setState({ activeTab: n });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag='h5'>{this.state.shopData.name}</CardTitle>
                        <CardText>Address: {this.state.shopData.address}</CardText>
                        <CardText>Opening Hours: {this.state.shopData.openingHours}</CardText>
                        <CardText>Contact: {this.state.shopData.contactNumber}</CardText>
                    </CardBody>
                    <CardBody>
                        <Button>Favourite</Button>
                    </CardBody>
                </Card>

                <Card>
                    <Nav tabs>
                        <NavItem>
                            <NavLink active={this.state.activeTab === '1'} onClick={this.changeTab('1')}>Items</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={this.state.activeTab === '2'} onClick={this.changeTab('2')}>Reviews</NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId='1'>
                            <Row>
                                <Col sm='12'>Items</Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId='2'>
                            <Row>
                                <Col sm='12'>Reviews</Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Card>
            </div>
        );
    }
}
