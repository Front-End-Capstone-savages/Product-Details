import React, { Component } from 'react'
import axios from 'axios'
import token from '../config/config.js'
export default class generalinfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            id: 12000
        }
    }
    componentDidMount(){
        this.getdata();
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

    render() {
        return (
            <div className='gen-info'>
                {console.log(this.props.data)}
                {this.props.data.map((element,index) =>{
                    return(
                        <p>{element.category}</p>
                    )
                })}
                <h5>Title</h5>
                <p>369$</p>
                <p>STYLE SELECTED STYLE</p>
            </div>
        )
    }
}
