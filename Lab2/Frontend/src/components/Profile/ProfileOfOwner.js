import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import axios from 'axios';
import './ProfileOfBuyer.css';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { connect } from 'react-redux';
import { profileDetailsofOwner,updateOwnerProfile } from '../../actions/profile_actions';
import { imageDownload ,imageUpload} from '../../actions/buyersearch';
class ProfileOfOwner extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Email: "",
            hide_profile: false,
            hide_RestaurantInfo: true,
            update_Name: false,
            Original_Name: true,
            update_Email: false,
            Original_Email: true,
            PhoneNumber: "",
            RestaurantName: "",
            Cuisine: "",
            update_PhoneNumber: false,
            Original_PhoneNumber: true,
            update_RestaurantName: false,
            Original_RestaurantName: true,
            update_Cuisine: false,
            Original_Cuisine: true,
            errorRedirect: false,
            ProfileImage: "",
            ProfileImagePreview: undefined,
            update_ProfileImage: false,
            Original_ProfileImage: true,
            RestaurantImage: "",
            RestaurantImagePreview: undefined,
            update_RestaurantImage: false,
            Original_RestaurantImage: true,
            PhoneNumberError: ""

        }
    }
    updateProfileName = async (e) => {
        e.preventDefault();
        let userID = localStorage.getItem('cookie2');
        axios.defaults.withCredentials = true;

        const data = {
            Name: this.state.Name,
            Email: this.state.Email,
            PhoneNumber:this.state.PhoneNumber,
            RestaurantName:this.state.RestaurantName,
            Cuisine: this.state.Cuisine,
            ProfileImage: this.state.ProfileImage,
            RestaurantImage: this.state.RestaurantImage,
            UserID: userID
        }
        await this.props.updateOwnerProfile(data);
        this.setState(
                        {
                            Original_Name: true,
                            update_Name: false
                        })
             
    }
    updateProfileImage = async (e) => {
        e.preventDefault();
        let userID = localStorage.getItem('cookie2');
        axios.defaults.withCredentials = true;
        const data = {
            Name: this.state.Name,
            Email: this.state.Email,
            PhoneNumber:this.state.PhoneNumber,
            RestaurantName:this.state.RestaurantName,
            Cuisine: this.state.Cuisine,
            ProfileImage: this.state.ProfileImage,
            RestaurantImage: this.state.RestaurantImage,
            UserID: userID
        }
        await this.props.updateOwnerProfile(data);
       
                    this.setState(
                        {
                            Original_ProfileImage: true,
                            update_ProfileImage: false

                        })
              
    }
    updateRestaurantImage = async (e) => {
        e.preventDefault();
        let userID = localStorage.getItem('cookie2');
        axios.defaults.withCredentials = true;

        const data = {
            Name: this.state.Name,
            Email: this.state.Email,
            PhoneNumber:this.state.PhoneNumber,
            RestaurantName:this.state.RestaurantName,
            Cuisine: this.state.Cuisine,
            ProfileImage: this.state.ProfileImage,
            RestaurantImage: this.state.RestaurantImage,
            UserID: userID
        }
        await this.props.updateOwnerProfile(data);
       
                    this.setState(
                        {
                            Original_RestaurantImage: true,
                            update_RestaurantImage: false

                        })
   
    }
    updateProfileEmail = async (e) => {
        e.preventDefault();
        let userID = localStorage.getItem('cookie2');
        axios.defaults.withCredentials = true;
        const data = {
            Name: this.state.Name,
            Email: this.state.Email,
            PhoneNumber:this.state.PhoneNumber,
            RestaurantName:this.state.RestaurantName,
            Cuisine: this.state.Cuisine,
            ProfileImage: this.state.ProfileImage,
            RestaurantImage: this.state.RestaurantImage,
            UserID: userID
        }
        await this.props.updateOwnerProfile(data);
        
                    this.setState(
                        {
                            Original_Email: true,
                            update_Email: false

                        })
          
    }
    updatePhoneNumber = async (e) => {
        e.preventDefault();
        let userID = localStorage.getItem('cookie2');
        axios.defaults.withCredentials = true;
        const data = {
            Name: this.state.Name,
            Email: this.state.Email,
            PhoneNumber:this.state.PhoneNumber,
            RestaurantName:this.state.RestaurantName,
            Cuisine: this.state.Cuisine,
            ProfileImage: this.state.ProfileImage,
            RestaurantImage: this.state.RestaurantImage,
            UserID: userID
        }
       if (!validator.isMobilePhone(this.state.PhoneNumber)) {
            this.setState(
                {
                    PhoneNumberError: "Not in Correct Format!!"
                }
            )
        }
        else {
            await this.props.updateOwnerProfile(data);
            
                        this.setState(
                            {
                                Original_PhoneNumber: true,
                                update_PhoneNumber: false

                            })
                  
    }
}
    updateRestaurantName = async (e) => {
        e.preventDefault();
        let userID = localStorage.getItem('cookie2');
        axios.defaults.withCredentials = true;
        const data = {
            Name: this.state.Name,
            Email: this.state.Email,
            PhoneNumber:this.state.PhoneNumber,
            RestaurantName:this.state.RestaurantName,
            Cuisine: this.state.Cuisine,
            ProfileImage: this.state.ProfileImage,
            RestaurantImage: this.state.RestaurantImage,
            UserID: userID
        }
        await this.props.updateOwnerProfile(data);
        
                    this.setState(
                        {
                            Original_RestaurantName: true,
                            update_RestaurantName: false

                        })
              
    }
    updateCuisineedit = async (e) => {
        e.preventDefault();
        let userID = localStorage.getItem('cookie2');
        axios.defaults.withCredentials = true;
        const data = {
            Name: this.state.Name,
            Email: this.state.Email,
            PhoneNumber:this.state.PhoneNumber,
            RestaurantName:this.state.RestaurantName,
            Cuisine: this.state.Cuisine,
            ProfileImage: this.state.ProfileImage,
            RestaurantImage: this.state.RestaurantImage,
            UserID: userID
        }
        await this.props.updateOwnerProfile(data);
        
                    this.setState(
                        {
                            Original_Cuisine: true,
                            update_Cuisine: false

                        })
            
    }
    handleChange = async (e) => {
        if (e.target.name === "ProfileImage") {
           var profilePhoto = e.target.files[0];
            var data = new FormData();
            
            data.append('photos', profilePhoto);
        
            this.setState({
                ProfileImage: profilePhoto.name
               
            })
                        await this.props.imageDownload(profilePhoto.name);
                        let imagePreview = 'data:image/jpg;base64, ' + this.props.imagePreviewresponse;
                                this.setState({
                                    ProfileImagePreview: imagePreview
                                })

                           
                    
               
        }
        else if (e.target.name === "RestaurantImage") {
            var profilePhoto = e.target.files[0];
            var data = new FormData();
            data.append('photos', profilePhoto);
               await this.props.imageDownload(profilePhoto.name);
                        let imagePreview = 'data:image/jpg;base64, ' + this.props.imagePreviewresponse;
                        
                                this.setState({
                                    RestaurantImage: profilePhoto.name,
                                    RestaurantImagePreview: imagePreview
                                })

                          
                    
              
        }
        else {
            const target = e.target;
            const name = target.name;
            const value = target.value;
            this.setState({
                [name]: value
            });
           
        }
    }

   async componentDidMount() {

        let emailID = localStorage.getItem('cookie3');;
        let data1 = {
            "Email": emailID,
            "UserType": "Owner"
        }
        await this.props.profileDetailsofOwner(data1);
        if (this.props.ownerProfile) {
            var data = this.props.ownerProfile;
            this.setState({
                Name: data.UserName,
                Email: data.Email,
                PhoneNumber: data.PhoneNumber,
                RestaurantName: data.RestName,
                Cuisine: data.Cuisine,
                ProfileImage: data.ProfileImage,
                RestaurantImage: data.RestaurantImage

            });
           if (data.ProfileImage !== null) {
                await this.props.imageDownload(data.ProfileImage);
                let imagePreview = 'data:image/jpg;base64, ' + this.props.imagePreviewresponse;

                this.setState({
                    ProfileImagePreview: imagePreview
                })
            }
            if (data.RestaurantImage !== null) {
                await this.props.imageDownload(data.RestaurantImage);
                let imagePreview = 'data:image/jpg;base64, ' + this.props.imagePreviewresponse;

                this.setState({
                    RestaurantImagePreview: imagePreview
                })


            }


        }


    }
    handleLogout = () => {
        localStorage.clear();
        window.location.Redirect("/");
    }
    render() {
        if (!localStorage.getItem('cookie2')) {
            <Redirect to="/Ownerlogin" />
        }
        let navLogin = null;
        if (localStorage.getItem('cookie1') === "Owner") {
           
            navLogin = (
                <div>

                    <ul className="nav navbar-right">
                        <li><Link to="/OwnerLogin" onClick={this.handleLogout}><span className="glyphicon glyphicon-user"></span>Logout</Link></li>
                    </ul>
                    <ul className="nav navbar-right">
                        <li ><Link to="/Menu"><span></span>Menu</Link></li>
                    </ul>
                   
                </div>
            );
        }

        let ProfileClick = (e) => {
            this.setState(
                {
                    hide_profile: false,
                    hide_RestaurantInfo: true
                }
            )
        }
        let RestaurantClick = (e) => {
            this.setState(
                {
                    hide_RestaurantInfo: false,
                    hide_profile: true
                }
            )
        }
        let MessagingClick = (e) => {
            this.setState(
                {
                    hide_RestaurantInfo: true,
                    hide_profile: true
                }
            )
        }
        
        let updateName = (e) => {
            this.setState(
                {
                    update_Name: true,
                    Original_Name: false
                }
            )
        }
        let updateEmail = (e) => {
            this.setState(
                {
                    update_Email: true,
                    Original_Email: false
                }
            )
        }
        let updatePhoneNumber = (e) => {
            this.setState(
                {
                    update_PhoneNumber: true,
                    Original_PhoneNumber: false
                }
            )
        }

        let updateCuisine = (e) => {
            this.setState(
                {
                    update_Cuisine: true,
                    Original_Cuisine: false
                }
            )
        }
        let updateRestaurantName = (e) => {
            this.setState(
                {
                    update_RestaurantName: true,
                    Original_RestaurantName: false
                }
            )
        }
        let updateImage = (e) => {
            this.setState(
                {
                    update_ProfileImage: true,
                    Original_ProfileImage: false
                }
            )
        }
        let updateRestaurantImage = (e) => {
            this.setState(
                {
                    update_RestaurantImage: true,
                    Original_RestaurantImage: false
                }
            )
        }
        let profileImageData = <img className="img-style" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="logo" />
        if (this.state.ProfileImagePreview) {
            profileImageData = <img className="img-style" src={this.state.ProfileImagePreview} alt="logo" />
        }
        let restaurantImageData = <img className="img-style" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="logo" />
        if (this.state.RestaurantImagePreview) {
            restaurantImageData = <img className="img-style" src={this.state.RestaurantImagePreview} alt="logo" />
        }
        return (
            <div>
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/Ownerlogin">GRUBHUB</a>
                        </div>
                        {navLogin}
                    </div>
                </nav>
                <div className="row">
                    <div className="col-sm-3">
                        <h3 className="h2-id">Your Account</h3>
                        {profileImageData}

                        <ul>

                            <li onClick={ProfileClick} className="li-id"><Link to="/ProfileOfOwner">Your Information</Link></li>
                            <li onClick={RestaurantClick} className="li-id"><Link to="/ProfileOfOwner">Restaurant Information</Link></li>
                            <li onClick={MessagingClick} className="li-id"><Link to="/Inbox">Messaging</Link></li>
                        </ul>
                    </div>

                    {!this.state.hide_profile && <div className="col-sm-9 mar" >
                        <h3> Your Information</h3>
                        {this.state.Original_ProfileImage && <div>
                            <li className="li-id1">
                                <div style={{ display: "inline-flex" }}>
                                    <div>
                                        <p className="name">Profile Image</p>
                                        <p>{this.state.ProfileImage}</p>
                                    </div>
                                    <div className="rightsidebutton">

                                        <p onClick={updateImage}> <Link to="/ProfileOfOwner">Edit</Link></p>
                                    </div>
                                </div>
                            </li>
                        </div>}
                        {this.state.update_ProfileImage && <div>
                            <form>
                                <div className="form-group">
                                    <h4>Edit ProfileImage</h4>
                                    <input type="file" name="ProfileImage" id="ProfileImage" className="btn btn-lg photo-upload-btn" onChange={this.handleChange} />
                                </div>
                                <button onClick={this.updateProfileImage} className="profilename">Save</button>
                                <button className="profileCancel">Cancel</button>
                                <br />
                            </form>
                        </div>}
                        <div>
                            <ul>
                                {this.state.Original_Name && <div>
                                    <li className="li-id1">
                                        <div style={{ display: "inline-flex" }}>
                                            <div>
                                                <p className="name">Name</p>
                                                <p>{this.state.Name}</p>
                                            </div>
                                            <div className="rightsidebutton">
                                                <p onClick={updateName}> <Link to="/ProfileOfOwner">Edit</Link></p>
                                            </div>
                                        </div>
                                    </li >
                                </div>}
                                {this.state.update_Name && <div>
                                    <form>
                                        <div className="form-group">
                                            <h4>Edit name</h4>

                                            <input type="text" name="Name" id="Name" className="form-control form-control-lg" placeholder="UserName" onChange={this.handleChange} value={this.state.Name} />

                                        </div>
                                        <button onClick={this.updateProfileName} className="profilename">Save Changes</button>
                                        <button className="profileCancel">Cancel</button>
                                        <br />
                                    </form>
                                </div>}
                                {this.state.Original_Email && <div>

                                    <li className="li-id1">
                                        <div style={{ display: "inline-flex" }}>
                                            <div>
                                                <p className="name">Email</p> <p>{this.state.Email}</p>
                                            </div>
                                            <div className="rightsidebutton">
                                                <p onClick={updateEmail}> <Link to="/ProfileOfOwner">Edit</Link></p>
                                            </div>
                                        </div>
                                    </li>

                                </div>}
                                {this.state.update_Email && <div>
                                    <form onSubmit={this.updateProfileEmail} method="post" autoComplete="off">
                                        <div>
                                            <h4>Edit email</h4>
                                            <input type="email" name="Email" id="Email" className="form-control form-control-lg" placeholder="Email address" onChange={this.handleChange} value={this.state.Email} />
                                        </div>

                                        <input type="submit" className="profilename" value="Save Changes" />

                                        <br />
                                        <button className="profileCancel">Cancel</button>
                                        <br />
                                    </form>
                                </div>}
                                {this.state.Original_PhoneNumber && <div>
                                    <li className="li-id1">
                                        <div style={{ display: "inline-flex" }}>

                                            <div>
                                                <p className="name">Phone Number</p> <p>{this.state.PhoneNumber}</p>
                                            </div>

                                            <div className="rightsidebutton">
                                                <p onClick={updatePhoneNumber}> <Link to="/ProfileOfOwner">Edit</Link></p>
                                            </div>
                                        </div>
                                    </li>
                                </div>}
                                {this.state.update_PhoneNumber && <div>
                                    <form>
                                        <div className="form-group">
                                            <h4>Edit Phone Number</h4>

                                            <div style={{ color: "red" }}>{this.state.PhoneNumberError}</div>

                                            <input type="text" name="PhoneNumber" id="PhoneNumber" className="form-control form-control-lg" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumber} />

                                        </div>
                                        <button onClick={this.updatePhoneNumber} className="profilename">Save Changes</button>
                                        <button className="profileCancel">Cancel</button>
                                        <br />
                                    </form>
                                </div>}
                            </ul>
                        </div>
                    </div>}
                    {!this.state.hide_RestaurantInfo && <div className="col-sm-9 mar" >
                        <h3> Restaurant Information</h3>
                        {this.state.Original_RestaurantName && <div>
                            <li className="li-id1">
                                <div style={{ display: "inline-flex" }}>
                                    <div>
                                        <p className="name">Restaurant Name</p>
                                        <p>{this.state.RestaurantName}</p>
                                    </div>
                                    <div className="rightsidebutton">
                                        <p onClick={updateRestaurantName}> <Link to="/ProfileOfOwner">Edit</Link></p>
                                    </div>
                                </div>
                            </li>

                        </div>}
                        {this.state.update_RestaurantName && <div>
                            <form>
                                <div className="form-group">
                                    <h4>Edit RestaurantName</h4>

                                    <input type="text" name="RestaurantName" id="RestaurantName" className="form-control form-control-lg" placeholder="RestaurantName" onChange={this.handleChange} value={this.state.RestaurantName} />

                                </div>
                                <button onClick={this.updateRestaurantName} className="profilename">Save Changes</button>
                                <button className="profileCancel">Cancel</button>
                                <br />
                            </form>
                        </div>}

                        {this.state.Original_RestaurantImage && <div>
                            <li className="li-id1">
                                <div style={{ display: "inline-flex" }}>

                                    <div>

                                        <p className="name">Restaurant Image</p>
                                        <p>{this.state.RestaurantImage}</p>
                                    </div>
                                    <div className="rightsidebutton2">
                                        {restaurantImageData}
                                    </div>

                                    <div className="rightsidebutton">
                                        <p onClick={updateRestaurantImage}> <Link to="/ProfileOfOwner">Edit</Link></p>
                                    </div>
                                </div>
                            </li>
                        </div>}
                        {this.state.update_RestaurantImage && <div>
                            <form>
                                <div className="form-group">
                                    <h4>Edit RestaurantImage</h4>
                                    <input type="file" name="RestaurantImage" id="RestaurantImage" className="btn btn-lg photo-upload-btn" onChange={this.handleChange} />
                                </div>
                                <button onClick={this.updateRestaurantImage} className="profilename">Save</button>
                                <button className="profileCancel">Cancel</button>
                                <br />
                            </form>
                        </div>}
                        {this.state.Original_Cuisine && <div>
                            <li className="li-id1">
                                <div style={{ display: "inline-flex" }}>
                                    <div>
                                        <p className="name">Cuisine</p> <p>{this.state.Cuisine}</p>
                                    </div>
                                    <div className="rightsidebutton">
                                        <p onClick={updateCuisine}> <Link to="/ProfileOfOwner">Edit</Link></p>
                                    </div>
                                </div>
                            </li>
                        </div>}
                        {this.state.update_Cuisine && <div>
                            <form>
                                <div className="form-group">
                                    <h4>Edit Cuisine</h4>

                                    <input type="text" name="Cuisine" id="Cuisine" className="form-control form-control-lg" placeholder="Cuisine" onChange={this.handleChange} value={this.state.Cuisine} />

                                </div>
                                <button onClick={this.updateCuisineedit} className="profilename">Save Changes</button>
                                <button className="profileCancel">Cancel</button>
                                <br />
                            </form>
                        </div>}

                    </div>}


                </div>}
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        ownerProfile: state.profile.ownerProfileDetails,
        imagePreviewresponse: state.buyer.imagePreviewresponse,
        imageupload_success: state.buyer.imageupload_success
    };
}
export default connect(
    mapStateToProps,
    { profileDetailsofOwner, imageDownload,updateOwnerProfile ,imageUpload}
)(ProfileOfOwner);

