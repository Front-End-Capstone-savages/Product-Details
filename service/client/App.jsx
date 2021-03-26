import React, { Component } from 'react'
import Carousel from './components/carousell.jsx'
import Generalinfo from './components/generalinfo.jsx'
import token from './config/config.js'
import axios from 'axios'
// import Vertical from './components/Vertical.jsx'
export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            style:[],
            id: 11003
        }
    }
    componentDidMount(){
        this.getdata();
        this.getstyledata();
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
     getstyledata(){
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.id}/styles`,{
            headers: {
                'Authorization': `${token}`
            }
        }).then((res)=>{
            this.setState({
            style: res.data.results
            })
        }).catch((err)=>{
            console.log(err);
        })
     }
    render() {
        return (          
            <div>
                {'this is my style data',console.log(this.state.style)}
                {window.scrollTo(0, 0)}
                <nav className="navbar navbar-dark bg-dark">
                <div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
</div>
</nav>
                <Carousel/>
                <Generalinfo data={this.state.data} style={this.state.style}/>
                {/* <Vertical /> */}
            </div>
        )
    }
}
