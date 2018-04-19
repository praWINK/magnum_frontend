import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class AddNewCustomer extends Component {
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
                            <h6>Customer Module</h6></li>
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

                                        <div className="card-filter meeting-min-con" style={{ marginBottom: '0.5%' }}>
                                            <div className="table-container">
                                                <div className="row" style={{ paddingBottom: "1%" }}>
                                                    <div className="col-md-12 product-form no-padding">
                                                        <div className="col-md-12 nopadding">
                                                            <div className="col-md-3 step-one">
                                                                <div className="form-group">
                                                                    <label>Name of Customer</label>
                                                                    <input type="text" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="col-md-12 nopadding">
                                                            <div className="card-container" style={{ marginTop: '10px' }}>
                                                                <div className="cust-address-con">
                                                                    <div className="col-md-12">
                                                                        <div className="col-md-11">
                                                                            <div className="col-md-7 step-one" style={{ paddingLeft: 0 }}>
                                                                                <div className="form-group">
                                                                                    <label>Office Name</label>
                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 step-one nopadding">
                                                                                <div className="form-group">
                                                                                    <label>Address Type</label>
                                                                                    <select className="form-control" name="">
                                                                                        <option value="slct">Select</option>
                                                                                        <option value="">Buying Office</option>
                                                                                        <option value="">Head Office</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label for="address">Registered Address 1</label>
                                                                                <textarea name="name" rows="3" className="form-control"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label for="address">Registered Address 2</label>
                                                                                <textarea name="name" rows="3" className="form-control"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 step-one">
                                                                            <div className="form-group">
                                                                                <label>Zip Code</label>
                                                                                <input type="text" className="form-control" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label>City</label>
                                                                                <select className="form-control" name="">
                                                                                    <option value="slct">Select</option>
                                                                                    <option value="wash">Chennai</option>
                                                                                    <option value="wash">Bangalore</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label>Country</label>
                                                                                <select className="form-control" name="country">
                                                                                    <option value="country">Select</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label>Boardline No.</label>
                                                                                <input type="text" className="form-control" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 step-one">
                                                                            <div className="form-group">
                                                                                <label>Fax No.</label>
                                                                                <input type="text" className="form-control" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-address">
                                                                            <a className="btn-floating btn-small waves-effect waves-light green address-click-btn"><i className="material-icons">add</i></a>
                                                                        </div>
                                                                    </div>


                                                                    <div className="second-address-con" style={{ display: "none" }}>
                                                                        <div className="col-md-12">
                                                                            <div className="col-md-11">
                                                                                <div className="col-md-2 step-one nopadding">
                                                                                    <div className="form-group">
                                                                                        <label>Address Type</label>
                                                                                        <select className="form-control" name="">
                                                                                            <option value="slct">Select</option>
                                                                                            <option value="">Buying Office</option>
                                                                                            <option value="">Head Office</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 step-one">
                                                                                <div className="form-group">
                                                                                    <label for="address">Registered Address 1</label>
                                                                                    <textarea name="name" rows="3" className="form-control"></textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 step-one">
                                                                                <div className="form-group">
                                                                                    <label for="address">Registered Address 2</label>
                                                                                    <textarea name="name" rows="3" className="form-control"></textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-1 step-one">
                                                                                <div className="form-group">
                                                                                    <label>Zip Code</label>
                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 step-one">
                                                                                <div className="form-group">
                                                                                    <label>City</label>
                                                                                    <select className="form-control" name="">
                                                                                        <option value="slct">Select</option>
                                                                                        <option value="wash">Chennai</option>
                                                                                        <option value="wash">Bangalore</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 step-one">
                                                                                <div className="form-group">
                                                                                    <label>Country</label>
                                                                                    <select className="form-control" name="country">
                                                                                        <option value="country">Select</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 step-one">
                                                                                <div className="form-group">
                                                                                    <label>Boardline No.</label>
                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-1 step-one">
                                                                                <div className="form-group">
                                                                                    <label>Fax No.</label>
                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="add-address">
                                                                                <a className="btn-floating btn-small waves-effect waves-light red sec-close-btn"><i className="material-icons">clear</i></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 nopadding">
                                                            <div className="col-md-3 step-one">
                                                                <div className="form-group">
                                                                    <label>Customer CRR Account Details</label>
                                                                    <input type="text" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 step-one">
                                                                <div className="form-group">
                                                                    <label>Audit Type</label>
                                                                    <select className="form-control" name="">
                                                                        <option value="">Select</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 step-one">
                                                                <div className="form-group">
                                                                    <label>Customer Discount</label>
                                                                    <input type="text" className="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="card-filter meeting-min-con" style={{ marginBottom: '0.5%' }}>
                                            <div className="row" style={{ padding: "1% 0 1% 0" }}>
                                                <div className="col-md-12 product-form nopadding">
                                                    <div className="col-md-12" style={{ marginBottom: '1%' }}>
                                                        <h6 className="dev-title"><b>Fabric Basic Requirement</b></h6>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>Primary Light Source</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>secondary Light Source</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>Fabric Spec Sheet</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                    <option value="">Applicable</option>
                                                                    <option value="">Not-Applicable</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 no-padding">
                                                        <div className="col-md-2 step-one">
                                                            <div className="form-group" style={{ marginBottom: "0" }}>
                                                                <label for="">Fabric Standards</label>
                                                            </div>
                                                            <div className="form-group">
                                                                <span><h6>Cotton</h6></span>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 step-one">
                                                            <div className="form-group" style={{ marginBottom: "1px" }}>
                                                                <label for=""></label>
                                                            </div>
                                                            <div className="form-group">
                                                                <span><h6>Viscose</h6></span>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 step-one">
                                                            <div className="form-group" style={{ marginBottom: "1px" }}>
                                                                <label for=""></label>
                                                            </div>
                                                            <div className="form-group">
                                                                <span><h6>Tencel</h6></span>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 step-one">
                                                            <div className="form-group">
                                                                <label for="address">Base Spec Format</label>
                                                                <div className="upload-box" style={{ display: "block" }}>
                                                                    <div className="file-field input-field">
                                                                        <div className="btn" style={{ marginBottom: 0, padding: "0px 20px" }}>
                                                                            <p style={{ fontSize: "10px" }}>Upload</p>
                                                                            <input type="file" multiple="" />
                                                                        </div>
                                                                        <div className="file-path-wrapper" style={{ display: "block" }}>
                                                                            <input className="file-path form-control" type="text" placeholder="PDF, Image, Excel" style={{ marginTop: "9px" }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group col-md-9 no-padding">
                                                                <label>Approved Testing Lab</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                </select>
                                                                <div className="hidden-select-box show-box" style={{ display: "none" }}>
                                                                    <select className="form-control" name="">
                                                                        <option value="">Select</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <span className="col-md-2 add-slct">
                                                                <a className="btn-floating btn-small waves-effect waves-light green open-box"><i className="material-icons">add</i></a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 profile-btn text-center">
                                                        <button className="primary" name="button">Save to Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="card-filter meeting-min-con" style={{ marginBottom: '0.5%' }}>
                                            <div className="row" style={{ padding: "1% 0 1% 0" }}>
                                                <div className="col-md-12 product-form no-padding">
                                                    <div className="col-md-12" style={{ marginBottom: '1%' }}>
                                                        <h6 className="dev-title"><b>Costing & Delivery</b></h6>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>Currency</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>Payment Term</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>Shipping Term</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                    <option value="">Ex-Factory - DTP</option>
                                                                    <option value="">FOB</option>
                                                                    <option value="">CNF</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>Order Confirmation</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                    <option value="">PO</option>
                                                                    <option value="">Booking Form</option>
                                                                    <option value="">OCS</option>
                                                                    <option value="">Email</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>Fixed Change <br /><span>(Testing, Inspection, Clearance)</span></label>
                                                                <input type="text" className="form-control" name="" value="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 nopadding">
                                                        <div className="card-container" style={{ marginTop: '10px' }}>
                                                            <div className="cust-address-con">
                                                                <div className="col-md-12">
                                                                    <div className="col-md-3 step-one">
                                                                        <div className="form-group">
                                                                            <label for="address">Shipping Address 1</label>
                                                                            <textarea name="name" rows="3" className="form-control"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 step-one">
                                                                        <div className="form-group">
                                                                            <label for="address">Shipping Address 2</label>
                                                                            <textarea name="name" rows="3" className="form-control"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 step-one">
                                                                        <div className="form-group">
                                                                            <label className="active">Zip Code</label>
                                                                            <input type="text" className="form-control" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 step-one">
                                                                        <div className="form-group">
                                                                            <label>City</label>
                                                                            <select className="form-control" name="">
                                                                                <option value="slct">Select</option>
                                                                                <option value="wash">Chennai</option>
                                                                                <option value="wash">Bangalore</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 step-one">
                                                                        <div className="form-group">
                                                                            <label>Country</label>
                                                                            <select className="form-control" name="country">
                                                                                <option value="country">Select</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="add-address">
                                                                        <a className="btn-floating btn-small waves-effect waves-light green address-click-btn"><i className="material-icons">add</i></a>
                                                                    </div>
                                                                </div>


                                                                <div className="second-address-con" style={{ display: "none" }}>
                                                                    <div className="col-md-12">
                                                                        <div className="col-md-11">
                                                                            <div className="col-md-2 step-one nopadding">
                                                                                <div className="form-group">
                                                                                    <label>Address Type</label>
                                                                                    <select className="form-control" name="">
                                                                                        <option value="slct">Select</option>
                                                                                        <option value="">Buying Office</option>
                                                                                        <option value="">Head Office</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label for="address">Registered Address 1</label>
                                                                                <textarea name="name" rows="3" className="form-control"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label for="address">Registered Address 2</label>
                                                                                <textarea name="name" rows="3" className="form-control"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 step-one">
                                                                            <div className="form-group">
                                                                                <label className="active">Zip Code</label>
                                                                                <input type="text" className="form-control" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label>City</label>
                                                                                <select className="form-control" name="">
                                                                                    <option value="slct">Select</option>
                                                                                    <option value="wash">Chennai</option>
                                                                                    <option value="wash">Bangalore</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label>Country</label>
                                                                                <select className="form-control" name="country">
                                                                                    <option value="country">Select</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2 step-one">
                                                                            <div className="form-group">
                                                                                <label className="active">Boardline No.</label>
                                                                                <input type="text" className="form-control" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 step-one">
                                                                            <div className="form-group">
                                                                                <label className="active">Fax No.</label>
                                                                                <input type="text" className="form-control" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-address">
                                                                            <a className="btn-floating btn-small waves-effect waves-light red sec-close-btn"><i className="material-icons">clear</i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 profile-btn text-center">
                                                        <button className="primary" name="button">Save to Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="card-filter meeting-min-con" style={{ marginBottom: '0.5%' }}>
                                            <div className="row" style={{ padding: "1% 0 1% 0" }}>
                                                <div className="col-md-12 product-form no-padding">
                                                    <div className="col-md-12" style={{ marginBottom: '1%' }}>
                                                        <h6 className="dev-title"><b>Departments</b><a className="btn-floating btn-small waves-effect waves-light green pull-right"><i className="material-icons">add</i></a></h6>
                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label>Name of Department</label>
                                                                <input type="text" className="form-control" name="" value="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 step-one">
                                                            <div className="form-group">
                                                                <label for="address">Sample Type</label>
                                                                <select className="form-control" name="">
                                                                    <option value="">Select</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-12 nopadding">
                                                        <div className="card-container no-padding">
                                                            <div className="row styles-con">
                                                                <ul className="nav nav-tabs nav-justified">
                                                                    <li className="active"><a data-toggle="tab" href="#home">Ladies Wear</a></li>
                                                                    <li><a data-toggle="tab" href="#menu1">Girls Wear</a></li>
                                                                    <li><a data-toggle="tab" href="#menu2">Mens Wear</a></li>
                                                                    <li><a data-toggle="tab" href="#menu3">Boys Wear</a></li>
                                                                </ul>
                                                                <div className="tab-content">
                                                                    <div id="home" className="tab-pane fade in active">
                                                                        <div className="row">
                                                                            <div className="col-md-12 nopadding">
                                                                                <div className="col-md-6">
                                                                                    <h6 className="depart-title">Sizes / Prices / Shipping :</h6>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <p className="depart-sub-title">Size Range :</p>
                                                                                <div className="col-md-12 nopadding size-range-con">
                                                                                    <div className="col-md-2 step-one nopadding">
                                                                                        <div className="form-group col-md-9 no-padding">
                                                                                            <label for="ref-no">Select Size</label>
                                                                                            <select className="form-control" name="">
                                                                                                <option>Select</option>
                                                                                                <option>S</option>
                                                                                                <option>M</option>
                                                                                                <option>L</option>
                                                                                            </select>
                                                                                            <div className="hidden-select-box show-box" style={{ display: "none" }}>
                                                                                                <select className="form-control" name="">
                                                                                                    <option>Select</option>
                                                                                                    <option>S</option>
                                                                                                    <option>M</option>
                                                                                                    <option>L</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                        <span className="col-md-2 add-slct">
                                                                                            <a className="btn-floating btn-small waves-effect waves-light green open-box"><i className="material-icons">add</i></a>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-md-8 col-md-offset-1" style={{ marginTop: "5px" }}>
                                                                                        <div className="cust-address-con">
                                                                                            <ul className="size-updater">
                                                                                                <li>S <span className="clear-size"><i className="material-icons">clear</i></span></li>
                                                                                                <li>M <span className="clear-size"><i className="material-icons">clear</i></span></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="size-range-selector">
                                                                                    <div className="col-md-2 step-one nopadding">
                                                                                        <div className="form-group">
                                                                                            <label>Price Quote Method</label>
                                                                                            <select className="form-control" id="material-selector" name="">
                                                                                                <option value="">Select</option>
                                                                                                <option value="size-single">Single</option>
                                                                                                <option value="size-mul">Multiple</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <div className="col-md-3 step-one nopadding">
                                                                                    <div className="form-group">
                                                                                        <label for="ref-no">Range</label><br />
                                                                                        <select className="form-control" id="range-slct" name="" multiple="multiple">
                                                                                            <option value="">Select</option>
                                                                                            <option value="Regular">Regular</option>
                                                                                            <option value="Maternity">Maternity</option>
                                                                                            <option value="PlusFit">PlusFit</option>
                                                                                            <option value="Tall">Tall</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="size-single" className="materials meeting-min-con" style={{ display: "none" }}>
                                                                                <div className="col-md-12">
                                                                                    <p className="depart-sub-title">Single:</p>
                                                                                    <div className="col-md-12 nopadding">
                                                                                        <div className="col-md-2 step-one nopadding">
                                                                                            <div className="form-group col-md-9 no-padding">
                                                                                                <label for="ref-no">Select Size</label>
                                                                                                <select className="form-control" name="">
                                                                                                    <option>Select</option>
                                                                                                    <option>S</option>
                                                                                                    <option>M</option>
                                                                                                    <option>L</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="size-mul" className="materials meeting-min-con" style={{ display: "none" }}>
                                                                                <div className="col-md-12">
                                                                                    <p className="depart-sub-title">Multiple:</p>
                                                                                    <div className="col-md-12 nopadding">
                                                                                        <div className="col-md-2 step-one nopadding">
                                                                                            <div className="form-group col-md-9 no-padding">
                                                                                                <label for="ref-no">Select Size</label>
                                                                                                <select className="form-control" name="">
                                                                                                    <option>Select</option>
                                                                                                    <option>S</option>
                                                                                                    <option>M</option>
                                                                                                    <option>L</option>
                                                                                                </select>
                                                                                                <div className="hidden-select-box show-box" style={{ display: "none" }}>
                                                                                                    <select className="form-control" name="">
                                                                                                        <option>Select</option>
                                                                                                        <option>S</option>
                                                                                                        <option>M</option>
                                                                                                        <option>L</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <span className="col-md-2 add-slct">
                                                                                                <a className="btn-floating btn-small waves-effect waves-light green open-box"><i className="material-icons">add</i></a>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 product-form" style={{ marginBottom: "1%" }}>
                                                                                <div className="sample-con">
                                                                                    <p className="sample-con-title" style={{ marginBottom: '1%' }}>Standard Type From Samples</p>
                                                                                    <div className="col-md-2 size-mngr" style={{ marginBottom: "5px" }}>
                                                                                        <div className="col-md-10 step-one">
                                                                                            <div className="form-group col-md-12 no-padding">
                                                                                                <label for="ref-no">Qty</label>
                                                                                                <select className="form-control" name="">
                                                                                                    <option >Select</option>
                                                                                                </select>
                                                                                                <div className="hidden-select-box show-box" style={{ display: "none" }}>
                                                                                                    <select className="form-control" name="">
                                                                                                        <option >Select</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="add-address">
                                                                                            <a className="btn-floating btn-small waves-effect waves-light green address-click-btn"><i className="material-icons">add</i></a>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="second-address-con" style={{ display: "none" }}>
                                                                                        <div className="col-md-2 size-mngr" style={{ marginBottom: "5px" }}>
                                                                                            <div className="col-md-10 step-one">
                                                                                                <div className="form-group col-md-12 no-padding">
                                                                                                    <label for="ref-no">Qty</label>
                                                                                                    <select className="form-control" name="">
                                                                                                        <option >Select</option>
                                                                                                    </select>
                                                                                                    <div className="hidden-select-box show-box" style={{ display: "none" }}>
                                                                                                        <select className="form-control" name="">
                                                                                                            <option >Select</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="add-address">
                                                                                                <a className="btn-floating btn-small waves-effect waves-light red sec-close-btn"><i className="material-icons">clear</i></a>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 nopadding">
                                                                                <div className="col-md-3 step-one">
                                                                                    <div className="form-group col-md-9 no-padding">
                                                                                        <label for="ref-no">Type of shipping method</label>
                                                                                        <select className="form-control" name="">
                                                                                            <option value="cust">Select</option>
                                                                                        </select>
                                                                                        <div className="hidden-select-box show-box" style={{ display: "none" }}>
                                                                                            <select className="form-control" name="">
                                                                                                <option value="cust">Select</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span className="col-md-2 add-slct">
                                                                                        <a className="btn-floating btn-small waves-effect waves-light green open-box"><i className="material-icons">add</i></a>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12" style={{ padding: 0, marginTop: "15px" }}>
                                                                                <div className="col-md-12 nopadding">
                                                                                    <div className="col-md-6">
                                                                                        <h6 className="depart-title">Staff :</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="card-container" style={{ marginTop: '10px' }}>
                                                                                    <div className="cust-address-con">
                                                                                        <div className="col-md-12">
                                                                                            <div className="col-md-3 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>First Name</label>
                                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-3 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>Last Name</label>
                                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-3 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>Designation</label>
                                                                                                    <select className="form-control" name="">
                                                                                                        <option value="slct">Select</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-3 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>Email Id</label>
                                                                                                    <input type="eamail" className="form-control" placeholder="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-2 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>Mobile No.</label>
                                                                                                    <input type="number" className="form-control" placeholder="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-3 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>Extn through Boardline</label>
                                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-2 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>Direct Line</label>
                                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-2 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>Reporting To</label>
                                                                                                    <select className="form-control" name="">
                                                                                                        <option value="slct">Select</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-2 step-one">
                                                                                                <div className="form-group">
                                                                                                    <label>Office</label>
                                                                                                    <select className="form-control" name="">
                                                                                                        <option value="">Select</option>
                                                                                                        <option value="">Buying Office</option>
                                                                                                        <option value="">Head Office</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="add-address">
                                                                                                <a className="btn-floating btn-small waves-effect waves-light green address-click-btn"><i className="material-icons">add</i></a>
                                                                                            </div>
                                                                                        </div>


                                                                                        <div className="second-address-con" style={{ display: "none" }}>
                                                                                            <div className="col-md-12">
                                                                                                <div className="col-md-3 step-one">
                                                                                                    <div className="form-group">
                                                                                                        <label>First Name</label>
                                                                                                        <input type="text" className="form-control" placeholder="" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-3 step-one">
                                                                                                    <div className="form-group">
                                                                                                        <label>Last Name</label>
                                                                                                        <input type="text" className="form-control" placeholder="" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-3 step-one">
                                                                                                    <div className="form-group">
                                                                                                        <label>Designation</label>
                                                                                                        <select className="form-control" name="">
                                                                                                            <option value="slct">Select</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-3 step-one">
                                                                                                    <div className="form-group">
                                                                                                        <label>Email Id</label>
                                                                                                        <input type="eamail" className="form-control" placeholder="" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-3 step-one">
                                                                                                    <div className="form-group">
                                                                                                        <label>Extn through Boardline</label>
                                                                                                        <input type="text" className="form-control" placeholder="" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-3 step-one">
                                                                                                    <div className="form-group">
                                                                                                        <label>Direct Line</label>
                                                                                                        <input type="text" className="form-control" placeholder="" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-3 step-one">
                                                                                                    <div className="form-group">
                                                                                                        <label>Reporting To</label>
                                                                                                        <select className="form-control" name="">
                                                                                                            <option value="slct">Select</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-3 step-one">
                                                                                                    <div className="form-group">
                                                                                                        <label>Office</label>
                                                                                                        <select className="form-control" name="">
                                                                                                            <option value="">Select</option>
                                                                                                            <option value="">Buying Office</option>
                                                                                                            <option value="">Head Office</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="add-address">
                                                                                                    <a className="btn-floating btn-small waves-effect waves-light red sec-close-btn"><i className="material-icons">clear</i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 product-form no-padding">
                                                                                <div className="col-md-6">
                                                                                    <h6 className="depart-title">Staff Details</h6>
                                                                                </div>
                                                                                <div className="col-md-12">
                                                                                    <div className="table-container">
                                                                                        <table className="striped cust-info">
                                                                                            <thead>
                                                                                                <tr>
                                                                                                    <th data-field="">FirstName</th>
                                                                                                    <th data-field="">LastName</th>
                                                                                                    <th data-field="">Designation</th>
                                                                                                    <th data-field="">Email ID</th>
                                                                                                    <th data-field="">Ext Board line </th>
                                                                                                    <th data-field="">Direct</th>
                                                                                                    <th data-field="">Reporting To</th>
                                                                                                    <th data-field="">Office</th>
                                                                                                    <th data-field="">Status</th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>Lyndsey</td>
                                                                                                    <td>Summner</td>
                                                                                                    <td>Buyer</td>
                                                                                                    <td>lyndsey_s@matalan.com</td>
                                                                                                    <td>044213523423</td>
                                                                                                    <td>01324235285</td>
                                                                                                    <td>MD</td>
                                                                                                    <td>Head Office</td>
                                                                                                    <td><div className="switch" style={{ display: "block" }}>
                                                                                                        <label>
                                                                                                            Inactive
                                                        <input type="checkbox" />
                                                                                                            <span className="lever"></span>
                                                                                                            Active
                                                      </label>
                                                                                                    </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div id="menu1" className="tab-pane fade">


                                                                    </div>
                                                                    <div id="menu2" className="tab-pane fade">

                                                                    </div>
                                                                    <div id="menu3" className="tab-pane fade">

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 profile-btn text-center">
                                                        <button className="primary" name="button">Save to Continue</button>
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

export default AddNewCustomer;





