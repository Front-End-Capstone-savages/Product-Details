import React, { Component } from 'react'
import axios from 'axios'
import token from '../config/config.js'

export default class generalinfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            id: 12000,
            check: false,
        }
        this.checkIcons = this.checkIcons.bind(this);
    }
    componentDidMount(){
        this.getdata();
    }
    
    checkIcons(){
        return(
            <div className="hello">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg>
          </div>
        )
    }
    getdata(){
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.id}`,{
            headers: {
                'Authorization': `${token}`
            }
        }).then((res)=>{
            this.setState({
            data: res.data
            })
        }).catch((err)=>{
            console.log(err);
        })
     }
     click(){
        if(this.state.check === false){
            this.setState({
                check: true    
            })
        }else{this.setState({
            check: false
        })} 
        console.log(this.state.check)
     }
     checkmark(){
         return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
          </svg>
         )}

    render() {
        return (
            <div>
            <div className='gen-info'>
                {console.log(this.props.data)}
                <div>{this.props.data.category}</div>
                
                <h5>Title</h5>
                <p>{this.props.data.default_price}</p>
                <p>STYLE SELECTED STYLE</p>
            </div>
            {/* <div className='color-container'>
                 <div className='color-div1' onClick={() =>this.checkmark()}><img className='color' src='https://www.designersguild.com/image/1024/59518' /></div>                 
                 <div className='color-div2'><img className='color' src='https://professionnels.tarkett.fr/media/img/M/TH_3917011_3707003_3708011_3912011_3914011_800_800.jpg'/></div>
                 <div className='color-div3'><img className='color' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/1024px-Solid_blue.svg.png'/> </div>
                 <div className='color-div4'><img className='color' src='https://www.sico.ca/cms/getmedia/d52c4f04-353e-4a2f-a9a5-e4f8a29d0eeb/swatch_mimosa-bouquet__6510-34.png'/> </div>
                 <div className='color-div5'><img className='color' src='https://www.formica.com/fr-fr/-/media/formica/emea/products/swatch-images/f0232/f0232-swatch.jpg?rev=fe3d56a0c73543ceba6fc1514b88d35b'/> </div>
                 <div className='color-div6'><img className='color' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/2000px-Solid_black.svg.png'/> </div>
                 <div className='color-div8'><img className='color' src='https://us.123rf.com/450wm/vvoennyy/vvoennyy1512/vvoennyy151200088/50405458-square-background-from-light-blue-color-toned-sheet-of-paper.jpg?ver=6'/> </div>
                 <div className='color-div7'><img className='color' src='https://www.pitt-pladdy.com/blog/_20090319-203342_0000_Photography_HOWTO_3_Getting_Colour_Right/orange.png'/> </div>
                
            </div> */}
           
            </div>
        )
    }
}
