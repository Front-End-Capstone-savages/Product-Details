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
             id: 12000,
             data:[]
         }
         this.nextSlide = this.nextSlide.bind(this);
         this.prevSlide = this.prevSlide.bind(this);
     }
     componentDidMount(){
         this.getdata();
     }
     getdata(){
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.id}/styles`,{
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
            this.setState({curent: 0, id:12000})
        }else if (this.state.curent < length){
            this.setState({curent: this.state.curent + 1, id:this.state.id})
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
     render() {
         return (
             <div>
             <div className="slider">
                 <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide}/>
                 <FaArrowAltCircleRight className="right-arrow" onClick={this.nextSlide}/>
                 {this.state.data.map((element, index) =>{
                     return (
                 <div className={index === this.state.curent ? 'slide active' : 'slide'} key={index}>
                     {index === this.state.curent  && (<img key={index} src={element.photos[0].url} alt='color image' className="image"/>)}
                </div>
                 )})}
                 <div className="side-car-cont">
                     {this.state.data.map((element, index) =>{
                         return(
                             <div className='side-img-container' key={index}>
                             <img src={element.photos[0].thumbnail_url} className='side-img'/>
                             </div>
                         )
                     })}
             {/* <img src='https://coverflooring.com/wp-content/uploads/2019/05/PVC-Expotrend-1015-Dark-Grey.jpg' className='side-img'/> */}
                 </div>
             </div>
                </div>
         )
     }
 }





 