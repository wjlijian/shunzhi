import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.svg'
import './home.css'

class Home extends Component{
  render(){
    return(
      <div className='home'>
        <div className='hero'>
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className='title'>
            吮指
          </h1>
          <p className='slogan'>
            享受舌尖艳遇
          </p>
        </div>
        <div className='actions'>
          <Link to='/login'>登录</Link>
          <Link to='/signup'>注册</Link>
        </div>
        {/* <div className='shun'>吮指</div>
        <div className='xiang'>享受舌尖艳遇</div> */}
        {/* <Link to='/signup'><button className='lu'>登录</button></Link>
        <Link to='/login'><button className='zhu'>注册</button></Link> */}
      </div>
    )
  }
}
export default Home
