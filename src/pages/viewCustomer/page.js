import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class ViewCustomer extends Component {
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
                <Header />
                <div className="top-sub-bar">
                    <ul>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <h6>View Customer</h6></li>
                        <li>
                            <a href="#"></a>
                        </li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div className="right-section">
                        <div className="row nopadding">
                            <div className="col-md-12 nopadding">
                                <div className="right-section-container">
                                    <div className="col-md-12 nopadding">
                                        <div className="card-container permission-con">
                                            <div className="row">
                                                <div className="col-md-8 col-md-offset-2">
                                                    <div className="card-light">
                                                        <ul className="main-list">
                                                            <li>
                                                                <ul>
                                                                    <li>Customer Id <span>:</span> </li>
                                                                    <li>M-077</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Customer Code<span>:</span> </li>
                                                                    <li>AC</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Customer Name <span>:</span> </li>
                                                                    <li>Aarti</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Customer Address <span>:</span> </li>
                                                                    <li>-</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Customer Phone<span>:</span> </li>
                                                                    <li>-</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Customer Email<span>:</span> </li>
                                                                    <li>-</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Customer Fax<span>:</span> </li>
                                                                    <li>-</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Customer Status<span>:</span> </li>
                                                                    <li>	Inactive </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Created On<span>:</span> </li>
                                                                    <li> 02-05-2012 11:47:23 AM </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Created By<span>:</span> </li>
                                                                    <li> aarti </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Last Modified<span>:</span> </li>
                                                                    <li>13-08-2016 12:16:30 PM </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Modified By<span>:</span> </li>
                                                                    <li> aarti </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br/>
                                                        <div className="col-md-12 profile-btn text-center">
                                                            <a href="customer.html" className="primary">BACK</a>
                                                            <a href="edit-customer.html" className="primary">EDIT</a>
                                                            <button className="primary" name="button">DELETE</button>
                                                        </div>
                         </div>
                                                </div>
                                            </div>
                   </div>
                </div>
            </div>
         </div>
      </div>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default ViewCustomer;





