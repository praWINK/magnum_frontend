import React, { Component, Fragment } from 'react';
//import { Layout } from '../../components'
//import { Grid, Image } from 'semantic-ui-react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Fragment>
                <Navbar color="inverse" inverse toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/">OML</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Only Much Louder</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="#"
                                        target="_blank">
                                        login
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
         </Fragment>
        );
    }
}

export default HomePage;