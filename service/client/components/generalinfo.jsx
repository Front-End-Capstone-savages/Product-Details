import React, { Component } from 'react'
import axios from 'axios'
export default class generalinfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
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
    render() {
        return (
            <div className='gen-info'>
                <p>CATEGORY</p>
                <h5>Title</h5>
                <p>369$</p>
                <p>STYLE SELECTED STYLE</p>
            </div>
        )
    }
}
