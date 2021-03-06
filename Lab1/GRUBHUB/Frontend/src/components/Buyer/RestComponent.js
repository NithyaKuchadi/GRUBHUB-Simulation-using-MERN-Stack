import React, {Component} from 'react';
import '../Css/BuyerLogin.css';
import DetailsView from './DetailsView';
import axios from 'axios';
import {Redirect} from 'react-router';
class RestComponent extends Component
{
    constructor()
    {
        super();
        this.state={
            restaurantID:"",
            restaurantName:"",
            DetailsView:false,
            ProfileImage:"",
            ProfileImagePreview:null
        }
    }
    componentDidMount()
    {
        console.log("Restaurant Image is:"+ this.props.restaurant.RestaurantImage);
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:5000/download-file/' + this.props.restaurant.RestaurantImage)
        .then(response => {
            let imagePreview = 'data:image/jpg;base64, ' + response.data;
            this.setState({
                ProfileImage: this.props.restaurant.RestaurantImage,
                ProfileImagePreview: imagePreview
            })

        })
       
    }
jumbotron=(e)=>
{
   e.preventDefault(); 

this.setState(
    {
        restaurantID : e.currentTarget.getAttribute("rest_id"),
        restaurantName: e.currentTarget.getAttribute("rest_name"),
        DetailsView:true  
    }
)
}
    render()
    {
        let Details=null;
    if(this.state.DetailsView)
     {
        Details= <Redirect to={{
        pathname: '/DetailsView',
        state: 
        { RestaurantID : this.state.restaurantID,
         RestaurantName: this.state.restaurantName
        }
    }}

/>}
 let profileImageData = <img className="img-style" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="logo" />
 if (this.state.ProfileImagePreview) {
     profileImageData = <img className="img-style" src={this.state.ProfileImagePreview} alt="logo" />
 }
       return( 
       <div className="jumbotron1234" rest_id={this.props.restaurant.RestaurantID} rest_name={this.props.restaurant.RestaurantName} onClick={this.jumbotron}>
           <div className="sameline">
           <div>
           <p> {profileImageData }</p> 
           </div>
           <div className="container">
        <li><h3> {this.props.restaurant.RestaurantName}</h3>
            <p>  {this.props.restaurant.Cuisine} </p> 
              <p> {this.props.restaurant.ZipCode} </p>     
          </li>
          </div>
          {Details}
          </div>
          </div>
          ) 
    }
}
export default RestComponent;