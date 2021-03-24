 import React, { Component } from 'react'
 import fakeData from '../fakeData.js'
 import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
 import Splide from '@splidejs/splide';

 export default class Carousel extends Component {
     constructor(props){
         super(props)
         this.state={
             curent: 0
         }
         this.nextSlide = this.nextSlide.bind(this);
         this.prevSlide = this.prevSlide.bind(this);
     }
     nextSlide() {
        const length = fakeData.length
        if(this.state.curent === length){
            this.setState({curent: 0})
        }else if (this.state.curent < length){
            this.setState({curent: this.state.curent + 1})
        }
     }
     prevSlide() {
        const length = fakeData.length
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
                 {fakeData.map((imageUrl, index) =>{
                     return (
                 <div className={index === this.state.curent ? 'slide active' : 'slide'} key={index}>
                     {index === this.state.curent  && (<img key={index} src={imageUrl.image} alt='color image' className="image"/>)}
                {console.log('index', index, 'curent', this.state.curent)}
                </div>
                 )})}
             </div>
                </div>
         )
     }
 }