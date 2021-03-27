import React, { Component } from "react";
import axios from "axios";
import token from "../config/config.js";
import StarRatingComponent from 'react-star-rating-component';

export default class generalinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      style: "Black",
      rating:[]
    };
    this.checkIcons = this.checkIcons.bind(this);
  }
  componentDidMount() {
    this.getdata();
    this.getRating();
  }

  checkIcons() {
    return (
      <div className="hello">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check2-circle"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
        </svg>
      </div>
    );
  }
  getdata() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getRating() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${this.props.id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        this.setState({
          rating: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  checkmark() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-check-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
      </svg>
    );
  }

  render() {
    return (
      <div>
        <div className="gen-info">
          {console.log(this.props.style[0])}
          {console.log("rating",this.state.rating.results)}
          <StarRatingComponent 
          name="rate2" 
          editing={false}
          
          starCount={5}
          value={3}
        />
       {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
          <div>{this.props.data.category}</div>

          <h3>{this.props.data.name}</h3>
          <p>${this.props.data.default_price}</p>
          <p>
            STYLE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
            {this.state.style}
          </p>
        </div>
        <div className='color-container'>
                 {this.props.style.map((element, index) => {
                    //  {console.log(element.name)}
                     return (
                         <div className='color-container'>
                         <div className='color' style={{background: element.name}} onClick={()=>this.setState({style: element.name})} > </div>
                         </div>
                        )
                    })}                
               
                
            </div>
            {console.log(this.state.style)}
      </div>
    );
  }
}
