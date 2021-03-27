 import React, { Component } from 'react'
 import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
 import Splide from '@splidejs/splide';
 import token from '../config/config.js'
 import axios from 'axios'

 export default class Carousel extends Component {
     constructor(props){
         super(props)
         this.state={
             curent: 0,
            //  id: 11001,
             data:[]
         }
         this.nextSlide = this.nextSlide.bind(this);
         this.prevSlide = this.prevSlide.bind(this);
         this.changeImg = this.changeImg.bind(this);
     }
     componentDidMount(){
         this.getdata();
     }
     getdata(){
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.id}/styles`,{
            headers: {
                'Authorization': `${token}`
            }
        }).then((res)=>{
            this.setState({
            data: res.data.results
            })
        }).catch((err)=>{
            console.log(err);
        })
     }
     nextSlide() {
        const length = this.state.data.length
        if(this.state.curent === length){
            this.setState({curent: 0})
        }else if (this.state.curent < length){
            this.setState({curent: this.state.curent + 1, id:this.props.id})
        }
     }
     prevSlide() {
        const length = this.state.data.length
        if(this.state.curent === 0){
            this.setState({curent: length - 1})
        }else{
            this.setState({curent: this.state.curent - 1})
        }
     }
     slider(){
        new Splide( '#splide', {
            direction: 'rtl',
            perPage  : 3,
        } ).mount();
    }
    changeImg(event) {
        // console.log(event.target.id)
        this.setState({
            curent: event.target.id
        })
    }
     render() {
         return (
             <div>
             <div className="slider">
                 <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide}/>
                 <FaArrowAltCircleRight className="right-arrow" onClick={this.nextSlide}/>
                 {this.state.data.map((element, index) =>(
        
                 <div className={this.state.curent ? 'slide active' : 'slide'} key={index}>
                     {/* {console.log('index', index, 'curent', this.state.curent)} */}
                     {index == this.state.curent  && (<img key={index} src={element.photos[this.state.curent].url} alt='color image' className="image"/>)}
                </div>
                 ))}
                 <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div id="carousel-pager" className="carousel slide " data-ride="carousel" data-interval={500000000}>
              {/* Carousel items */}
              <div className="carousel-inner vertical">
                  
                <div className="active item">
                    {this.state.data.map((element, index)=>{
                        return(
                            <img src={element.photos[0].thumbnail_url} className="img-responsive" data-target="#carousel-main" data-slide-to={0} id={index} onClick={(event) =>this.changeImg(event)}/>
                        )
                    })}
                </div>
              </div>
              {/* Controls */}
              <a className="left carousel-control" href="#carousel-pager" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-up" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#carousel-pager" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-down" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
             </div>
                </div>
         )
        }
    }





 