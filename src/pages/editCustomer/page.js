import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class EditCustomer extends Component {
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
                            <h6>Edit Customer</h6></li>
                        <li>
                            <a href="#"></a>
                        </li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-filter meeting-min-con">
                                            <div class="table-container">
                                                <div class="row" style={{ paddingBottom: "1%" }}>
                                                    <div class="col-md-12 product-form no-padding" style={{ marginTop: "1%" }}>
                                                        <div class="col-md-2 col step-one">
                                                            <div class="form-group">
                                                                <label for="ID">Customer Code</label>
                                                                <br/>
                                                                    {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                     <input type="text" class="form-control" placeholder=""/>
                                   </div>
                                  </div>
                                                                <div class="col-md-2 step-one">
                                                                    <div class="form-group">
                                                                        <label for="name">Customer Name</label>
                                                                        <br/>
                                                                            {/* <span>(A short and catchy yet descriptive name for your product)</span> */}
                                       <input type="text" class="form-control" placeholder=""/>
                                     </div>
                                   </div>

                                                                        <div class="col-md-3 step-one">
                                                                            <div class="form-group">
                                                                                <label for="phone">Customer Phone</label>
                                                                                <br/>
                                                                                   {/* <span>(A short and catchy yet descriptive name for your product)</span>  */} 
                                       <input type="number" class="form-control" placeholder=""/>
                                     </div>
                                   </div>
                                                                                <div class="col-md-3 step-one">
                                                                                    <div class="form-group">
                                                                                        <label for="email">Customer Email</label>
                                                                                        <br/>
                                                                                           {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                       <input type="text" class="form-control" placeholder=""/>
                                     </div>
                                   </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="fax">Customer Fax</label>
                                                                                                <br/>
                                                                                                   {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                       <input type="text" class="form-control" placeholder=""/>
                                     </div>
                                   </div>
                                                                                                <div class="col-md-6 step-one">
                                                                                                    <div class="form-group">
                                                                                                        <label for="address">Customer Address</label>
                                                                                                        <br/>
                                                                                                           {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                       <textarea type="text" class="form-control" placeholder=""></textarea>
                                     </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-3 step-one">
                                                                                                        <div class="form-group">
                                                                                                            <label for="address">Status</label>
                                                                                                            <select class="form-control" name="">
                                                                                                                <option value="">Select</option>
                                                                                                                <option value="">Active</option>
                                                                                                                <option value="">Inactive</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-12 profile-btn text-center">
                                                                                                        <button type="button" class="primary" name="button">ADD CUSTOMER</button>
                                                                                                        <a href="customer.html" class="primary">BACK</a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                            </div>
                       </div>
                                                             
                        <div class="customer-edit-con">
                                                                                        <div class="row nopadding">
                                                                                            <div class="col-md-12 nopadding">
                                                                                                <div class="card-container">
                                                                                                    <div class="row styles-con">
                                                                                                        <ul class="nav nav-tabs nav-justified">
                                                                                                            <li class="active"><a data-toggle="tab" href="#home">Sites</a></li>
                                                                                                            <li><a data-toggle="tab" href="#menu1">Departments</a></li>
                                                                                                        </ul>

                                                                                                        <div class="tab-content">
                                                                                                            <div id="home" class="tab-pane fade in active">
                                                                                                                <div class="row hide-customer-site">
                                                                                                                    <div class="col-md-12 site-head">
                                                                                                                        <div class="col-md-6">
                                                                                                                            <p>Customer Sites</p>
                                                                                                                        </div>
                                                                                                                        <div class="col-md-6">
                                                                                                                            <p class="pull-right"><a href="#" class="site-add" style={{ textDecoration: "none" }}>Add New Site</a></p>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div class="col-md-12">
                                                                                                                        <div class="table-container">
                                                                                                                            <table>
                                                                                                                                <thead>
                                                                                                                                    <tr>
                                                                                                                                        <th>Address</th>
                                                                                                                                        <th colspan="2">Actions</th>
                                                                                                                                    </tr>
                                                                                                                                </thead>
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td>NO:67, HOME TOWN STREETS.. </td>
                                                                                                                                        <td><a href="edit-customer.html" class="edit" title="edit"><i class="material-icons">create</i></a></td>
                                                                                                                                        <td><a href="#" class="delete" title="delete"><i class="material-icons">delete</i></a></td>
                                                                                                                                    </tr>

                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                               
                                               <div class="add-site meeting-min-con">
                                                                                                                    <div class="row">
                                                                                                                        <div class="col-md-12">
                                                                                                                            <div class="table-site">
                                                                                                                                <p class=" text-center site-title"><b>ADD NEW SITE</b></p>
                                                                                                                                <div class="col-md-12 product-form" style={{ marginTop: "1%" }}>
                                                                                                                                    <div class="col-md-6 step-one">
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label for="address">Address 1</label>
                                                                                                                                            <br/>
                                                                                                                                               {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                            <input type="text" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>
                                                                                                                                            <div class="col-md-6 step-one">
                                                                                                                                                <div class="form-group">
                                                                                                                                                    <label for="address">Address 2</label>
                                                                                                                                                    <br/>
                                                                                                                                                       {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                            <input type="text" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>
                                                                                                                                                    <div class="col-md-3 step-one">
                                                                                                                                                        <div class="form-group">
                                                                                                                                                            <label for="city">CITY</label>
                                                                                                                                                            <br/>
                                                                                                                                                               {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                            <input type="text" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>
                                                                                                                                                            <div class="col-md-3 step-one">
                                                                                                                                                                <div class="form-group">
                                                                                                                                                                    <label for="state">State</label>
                                                                                                                                                                    <br/>
                                                                                                                                                                       {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                            <input type="text" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>
                                                                                                                                                                    <div class="col-md-3 step-one">
                                                                                                                                                                        <div class="form-group">
                                                                                                                                                                            <label for="zip">Zip</label>
                                                                                                                                                                            <br/>
                                                                                                                                                                               {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                            <input type="text" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>
                                                                                                                                                                            <div class="col-md-3 step-one">
                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                    <label for="country">Country</label>
                                                                                                                                                                                    <br/>
                                                                                                                                                                                       {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                            <input type="text" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>
                                                                                                                                                                                    <div class="col-md-12 profile-btn">
                                                                                                                                                                                        <button type="button" class="primary">Add Site</button>
                                                                                                                                                                                        <a href="" class="primary site-add-go-back">BACK</a>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                            </div>
                                                                                                                                                            <div id="menu1" class="tab-pane fade">
                                                                                                                                                                <div class="row hide-customer-dept">
                                                                                                                                                                    <div class="col-md-12 site-head">
                                                                                                                                                                        <div class="col-md-6">
                                                                                                                                                                            <p>Customer Departments</p>
                                                                                                                                                                        </div>
                                                                                                                                                                        <div class="col-md-6">
                                                                                                                                                                            <p class="pull-right"><a href="#" class="dept-add" style={{ textDecoration: "none" }}>Add New Department</a></p>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                    <div class="col-md-12">
                                                                                                                                                                        <div class="table-container">
                                                                                                                                                                            <table>
                                                                                                                                                                                <thead>
                                                                                                                                                                                    <tr>
                                                                                                                                                                                        <th>Department</th>
                                                                                                                                                                                        <th>Manage</th>
                                                                                                                                                                                        <th colspan="2">Actions</th>
                                                                                                                                                                                    </tr>
                                                                                                                                                                                </thead>
                                                                                                                                                                                <tbody>
                                                                                                                                                                                    <tr>
                                                                                                                                                                                        <td>Sampling</td>
                                                                                                                                                                                        <td><a href="" class="linker">Manage Sizes</a></td>
                                                                                                                                                                                        <td><a href="edit-customer.html" class="edit" title="edit"><i class="material-icons">create</i></a></td>
                                                                                                                                                                                        <td><a href="#" class="delete" title="delete"><i class="material-icons">delete</i></a></td>
                                                                                                                                                                                    </tr>

                                                                                                                                                                                </tbody>
                                                                                                                                                                            </table>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                
                                               <div class="add-dept meeting-min-con">
                                                                                                                                                                    <div class="row">
                                                                                                                                                                        <div class="col-md-12">
                                                                                                                                                                            <div class="table-site">
                                                                                                                                                                                <p class=" text-center site-title">
                                                                                                                                                                                    <b>ADD NEW DEPARTMENT</b>
                                                                                                                                                                                </p>
                                                                                                                                                                                <div class="col-md-6 col-md-offset-3 product-form">
                                                                                                                                                                                    <div class="col-md-12 step-one">
                                                                                                                                                                                        <div class="form-group">
                                                                                                                                                                                            <label for="dept">Department</label>
                                                                                                                                                                                            <br/>
                                                                                                                                                                                               {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                            <input type="text" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>
                                                                                                                                                                                            <div class="col-md-12 step-one">
                                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                                    <label for="address">Description</label>
                                                                                                                                                                                                    <br/>
                                                                                                                                                                                                       {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                            <textarea class="form-control" cols="30" rows="2" style={{ resize: "none" }}></textarea>
                                                                        </div>
                                                                                                                                                                                                </div>

                                                                                                                                                                                                <div class="col-md-12">
                                                                                                                                                                                                    <button type="button" class="primary">Add Department</button>
                                                                                                                                                                                                    <a href="" class="primary dept-add-go-back">BACK</a>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div> 
                                            </div>

                                                                                                                                                                    </div>
                                                                                                                                                                </div>
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

export default EditCustomer;





