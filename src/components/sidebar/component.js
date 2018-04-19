import React, { Component, Fragment } from 'react';

//import { Grid, Image } from 'semantic-ui-react'


class Sidebar extends Component {
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
                <div className="left-section">
                    <div className="nav">
                        <ul className="left-nav">
                            <li><a href="index.html" className=""><div></div><i className="icon-home icons"></i> Dashboard </a></li>
                            <li><a href="meeting-minutes.html" className=""><div></div> <i className="icon-clock icons"></i> Meeting Notes </a></li>
                            <li><a href="communication.html"><div></div> <i className="fa fa-exchange"></i> Communication </a></li>
                            <li><a href="#" className="development"><div></div> <i className="fa fa-flag-o"></i> Development </a></li>
                            <ul className="development-sub-nav">
                                <li><a href="dev_cad.html"><div></div>CAD</a></li>
                                <li><a href="" className="fabric_dev"><div></div> Fabric </a></li>
                                <ul className="fabric-sub-nav">
                                    <li><a href="dev_fabric.html"><div></div>Fabric</a></li>
                                    <li><a href="b-numb.html"><div></div>B Number </a></li>
                                </ul>
                                <li><a href="dev_trim.html"><div></div> Trim </a></li>
                                <li><a href="dev_sourcing.html"><div></div> Sourcing </a></li>
                                <li><a href="dev_product.html"><div></div> Product </a></li>
                            </ul>
                            <li><a href="styles.html" className=""><div></div> <i className="icon-star icons"></i> Style </a></li>
                            <li><a href="sample-request.html" className=""><div></div> <i className="fa fa-bell"></i> Sample Request </a></li>
                            <li><a href="costing-v2.html" className=""><div></div><i className="fa fa-money"></i>Costing</a></li>
                            <li><a href="#" className="system"><div></div> <i className="fa fa-link"></i> System </a></li>
                            <ul className="system-sub-nav">
                                <li><a href="fabric.html"><div></div> Fabric </a></li>
                                <li><a href="trims.html"><div></div> Trims </a></li>
                                <li><a href="embroidery.html"><div></div> Embroidery </a></li>
                                <li><a href="master_supplier.html"><div></div> Suppliers </a></li>
                                <li><a href="master_style.html"><div></div> Style </a></li>
                                <li><a href="master_customer.html"><div></div> Customer </a></li>
                            </ul>
                            <li><a href="supplier.html"><div></div>  <i className="fa fa-truck"></i> Suppliers </a></li>
                            <li><a href="#" onClick={() => this.props.history.push('/') }className="selected"><div></div> <i className="icon-user icons"></i> Customer </a></li>
                            <li><a href="#" className="prod"><div></div> <i className="icon-flag icons"></i> Permissions </a></li>
                            <ul className="product-sub-nav">
                                <li><a href="permission-details.html"><div></div> Employee Details </a></li>
                                <li><a href="permission-role.html"><div></div> Role Management </a></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;







