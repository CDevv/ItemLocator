import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText, CardSubtitle, Button, Nav, NavItem, NavLink, TabContent, TabPane,
    Row, Col, Form, FormGroup, Input
} from 'reactstrap';
import classnames from 'classnames';
import authService from './api-authorization/AuthorizeService';
import { GetById, Add } from '../Service.js';

function ItemCard(props) {
    let u = undefined;

    function priceRender(){
        if (props.availability) {
            return (
                <div>
                    <CardText tag='h4'>${props.price}</CardText>
                    <CardSubtitle>{props.quantity} left in stock</CardSubtitle>
                </div>
            )
        } else {
            return (
                <CardText>Out of stock</CardText>
            )
        }
    };

    function favRender() {
        if (props.isauth) {
            return (
                <Button>Favourite</Button>
            )
        } else {
            return (
                <p>Please log in to favourite item</p>
            )
        }
    }

    return (
        <Card style={{
            width: '18rem',
        }}>
            <CardBody>
                <CardTitle tag='h5'>{props.name}</CardTitle>
                <CardSubtitle>{props.category}</CardSubtitle>
                <CardText style={{
                    maxHeight: '20ch', overflow: 'hidden'
                }}>{props.description}</CardText>
                {priceRender() }
                { favRender()}
            </CardBody>
            
        </Card>
    )
}

function ReviewCard(props) {
    return (
        <Card>
            <CardBody>
                <CardTitle tag='h5'>{props.name} says:</CardTitle>
                <CardText>{props.comment}</CardText>
            </CardBody>
        </Card>
    )
}

export class ShopInfo extends Component {
    state = {
        shopData: [],
        userId: "userId",
        reviewU: "",
        activeTab: '1',
        isAuth: false,
        reviewText: "",
    }

    componentDidMount() {
        const shopId = window.location.href.split('/')[4];
        GetById("Shops", shopId).then(shop => this.setState({ shopData: shop }))
        authService.getUser().then(user => {
            this.setState({ userId: user.sub }); 
        })
        authService.isAuthenticated().then(val => {
            this.setState({ isAuth: val });
        })
    }

    changeTab(n) {
        if (this.state.activeTab !== n) {
            this.setState({ activeTab: n });
        }
    }

    favBtn() {
        if (this.state.isAuth) {
            return (
                <Button>Favourite</Button>
            )
        } else {
            return (
                <p>Please log in to favourite shop</p>
            )
        }
    }

    changeReviewText(text) {
        this.setState({reviewText: text.target.value})
    }

    submitReview(text) {
        Add("Reviews", {
            shopId: this.state.shopData.id,
            userId: this.state.userId,
            comment: text,
            userName: ""
        });
        GetById("Users", this.state.userId).then(u => {
            let arr = this.state.shopData.reviews;
            arr.push({
                id: 0,
                shopId: this.state.shopData.id,
                userId: this.state.userId,
                comment: text,
                userName: u.userName
            })
            let sd = this.state.shopData;
            sd.reviews = arr;
            this.setState({ shopData: sd });
        })
        
    }

    reviewInput() {
        if (this.state.isAuth) {
            return (
                <Form>
                    <FormGroup>
                        <Input id='comment'
                            placeholder='Your comment here'
                            type='textarea'
                            value={this.state.reviewText}
                            onChange={(t) => this.changeReviewText(t)}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Button
                            onClick={() => this.submitReview(this.state.reviewText)}
                        >Post Review</Button>
                    </FormGroup>
                </Form>
            )
        } else {
            return (
                <p>Please log in to leave a review</p>
            )
        }
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
                        {this.favBtn()}
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    active={this.state.activeTab === '1'}
                                    onClick={() => this.changeTab('1')}
                                >Items</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={this.state.activeTab === '2'}
                                    onClick={() => this.changeTab('2')}>Reviews</NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab} style={{
                            display: 'flex', paddingTop: '10px', 
                        }}>
                            <TabPane tabId='1'>
                                <Row style={{
                                    gap: 10, width: '28rem'
                                } }>
                                    {this.state.shopData.items?.map(i =>
                                        <Col>
                                            <ItemCard
                                                key={i.id}
                                                name={i.name}
                                                category={i.category}
                                                description={i.description}
                                                price={i.price}
                                                availability={i.availability}
                                                quantity={i.quantity}
                                                isauth={this.state.isAuth}
                                            ></ItemCard>
                                        </Col>
                                    )}
                                </Row>
                                
                            </TabPane>
                            <TabPane tabId='2'>
                                <Row style={{
                                    width: '28rem'
                                } }>
                                    <Col>
                                        {this.reviewInput() }
                                    </Col>
                                </Row>
                                <div style={{
                                    display: 'flex', gap: 10, flexDirection: 'column-reverse'
                                } }>
                                    {this.state.shopData.reviews?.map(r =>
                                        <Row style={{
                                            width: '28rem'
                                        } }>
                                            <Col>
                                                <ReviewCard
                                                    key={r.id}
                                                    name={r.userName}
                                                    comment={r.comment}
                                                ></ReviewCard>
                                            </Col>
                                        </Row>
                                    )} 
                                </div>
                                  
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
