 import React, { Component } from 'react'
 import fakeData from '../fakeData.js'
 import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

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
     render() {
         return (
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
         )
     }
 }
 
 





























// import React, { Component } from 'react'


// export default class Test extends Component {
//     render() {
//         return (
//             <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
//             <div class="carousel-inner">
//               <div class="carousel-item active">
//                 <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" class="d-block w-100" alt="..."/>
//               </div>
//               <div class="carousel-item">
//                 <img src="https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" class="d-block w-100" alt="..."/>
//               </div>
//               <div class="carousel-item">
//                 <img src="..." class="d-block w-100" alt="..."/>
//               </div>
//             </div>
//             <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
//               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
//               <span class="carousel-control-next-icon" aria-hidden="true"></span>
//               <span class="sr-only">Next</span>
//             </a>
//           </div>
//         )
//     }
// }
