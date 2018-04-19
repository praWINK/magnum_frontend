import React, { Component, Fragment } from 'react';
import { Header, Sidebar,Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class ListCustomer extends Component {
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
                <Header/>
                <div className="top-sub-bar">
                    <ul>
                        <li><a href="#" className="click-me">Filters <i className="fa fa-angle-down"></i></a></li>
                        <li><h6>Customer</h6></li>
                        <li className="pull-right"><a href="#" onClick={()=> this.props.history.push('/addNewCustomer')}>Add New</a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                <Sidebar/>
                    <div className="right-section">
                        <div className="row nopadding">
                            <div className="col-md-12 nopadding">
                                <div className="right-section-container">
                                    <div className="col-md-12 nopadding">
                                        <div className="card-container card-filter customer-filter no-padding" style={{display:"none"}}>
                                            <div className="meeting-min-con">
                                                <div className="row">
                                                    <div className="col-md-8 product-form">
                                                        <div className="col-md-6">
                                                            <div className="col-md-12 step-one">
                                                                <div className="form-group">
                                                                    <label for="phone">Search Customer</label><br/>
                                                                        <span>BY</span>
                                                                        <br/>
                                                                            <span>(A short and catchy yet descriptive name for your product)</span>
                                                                            <input type="text" className="form-control" placeholder="F-66836 AS IS"/> 
                                                                            <select className="form-control" name="">
                                                                                <option value="style">Select</option>
                                                                                <option value="style">Cherokee</option>
                                                                                <option value="style">FDU</option>
                                                                                <option value="style">UCB</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="col-md-12 step-one ">
                                                                            <div className="form-group">
                                                                                <label for="ref-no"></label><br/>
                                                                                    <span>FOR</span>
                                                                                    <br/>
                                                                                        <input type="text" className="form-control" name="" value=""/>
                                                                            </div>
                                                                        </div>
                                                                        </div>

                                                                            </div>
                                                                            <div className="col-md-4 product-form">
                                                                                <div className="col-md-12 mm-btns" style={{marginTop:"8%"}}>
                                                                                    <div className="col-md-6 col-md-offset-3">
                                                                                        <button type="button" className="primary pull-right" name="button">Search</button>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                        
                        <div className="card-container cust-card-con">
                                                                    <div className="table-container">
                                                                        <table className="striped" >
                                                                            <thead>
                                                                                <tr>
                                                                                    <th data-field="id">Customer Code</th>
                                                                                    <th data-field="name">Customer Name</th>
                                                                                    <th data-field="price">Status</th>
                                                                                    <th colspan="2" data-field="price">Manage</th>
                                                                                    <th colspan="3" data-field="price">Action</th>
                                                                                    {/* <!--<th data-field="price">Edit</th>
                                                                                    <th data-field="price">Delete</th>--> */}
                                </tr>
                                                                            </thead>

                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>AC</td>
                                                                                    <td>Aarti</td>
                                                                                    <td>
                                                                                        <span className="in-active">Inactive</span>
                                                                <span className="active" style={{ display: "none" }}>Active</span>
                                                                                    </td>
                                                                                    <td><a href="" className="linker">Styles</a></td>
                                                                                    <td><a href="" className="linker">Orders</a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/viewCustomer")} className="view" title="view"><i className="material-icons">visibility</i></a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/editCustomer")} className="edit" title="edit"><i className="material-icons">create</i></a></td>
                                                                                    <td><a href="#" className="delete" title="delete"><i className="material-icons">delete</i></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>AC</td>
                                                                                    <td>Aarti</td>
                                                                                    <td>
                                                                                        <span className="in-active">Inactive</span>
                                                                <span className="active" style={{ display: "none" }}>Active</span>
                                                                                    </td>
                                                                                    <td><a href="" className="linker">Styles</a></td>
                                                                                    <td><a href="" className="linker">Orders</a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/viewCustomer")} className="view" title="view"><i className="material-icons">visibility</i></a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/editCustomer")} className="edit" title="edit"><i className="material-icons">create</i></a></td>
                                                                                    <td><a href="#" className="delete" title="delete"><i className="material-icons">delete</i></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>AC</td>
                                                                                    <td>Aarti</td>
                                                                                    <td>
                                                                <span className="in-active" style={{ display: "none" }}>Inactive</span>
                                                                                        <span className="active">Active</span>
                                                                                    </td>
                                                                                    <td><a href="" className="linker">Styles</a></td>
                                                                                    <td><a href="" className="linker">Orders</a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/viewCustomer")} className="view" title="view"><i className="material-icons">visibility</i></a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/editCustomer")} className="edit" title="edit"><i className="material-icons">create</i></a></td>
                                                                                    <td><a href="#" className="delete" title="delete"><i className="material-icons">delete</i></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>AC</td>
                                                                                    <td>Aarti</td>
                                                                                    <td>
                                                                                        <span className="in-active">Inactive</span>
                                                                                        <span className="active" style={{display:"none"}}>Active</span>
                                                                                    </td>
                                                                                    <td><a href="" className="linker">Styles</a></td>
                                                                                    <td><a href="" className="linker">Orders</a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/viewCustomer")} className="view" title="view"><i className="material-icons">visibility</i></a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/editCustomer")} className="edit" title="edit"><i className="material-icons">create</i></a></td>
                                                                                    <td><a href="#" className="delete" title="delete"><i className="material-icons">delete</i></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>AC</td>
                                                                                    <td>Aarti</td>
                                                                                    <td>
                                                                                        <span className="in-active" style={{display:"none"}}>Inactive</span>
                                                                                        <span className="active">Active</span>
                                                                                    </td>
                                                                                    <td><a href="" className="linker">Styles</a></td>
                                                                                    <td><a href="" className="linker">Orders</a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/viewCustomer")} className="view" title="view"><i className="material-icons">visibility</i></a></td>
                                                                                    <td><a href="#" onClick={()=> this.props.history.push("/editCustomer")} className="edit" title="edit"><i className="material-icons">create</i></a></td>
                                                                                    <td><a href="#" className="delete" title="delete"><i className="material-icons">delete</i></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
       </div>
                <Footer/>
                </div>
            </Fragment>
        );
    }
}

export default ListCustomer;





