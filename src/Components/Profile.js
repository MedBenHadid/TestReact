import React, { Component } from 'react'

import User from './User'
export default class Profile extends Component {

  state ={
    profileList :[]
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then((data)=>{
      this.setState({profileList : data,loading : false}); console.log(this.state.profileList[0])

    })
    .catch(console.log)
  };
  render() {
    
    return (
      <div>
      {
        this.state.profileList.map((item,index)=><User name={item.name} id={item.id} />)
      }
      </div>
    )
  }
}
