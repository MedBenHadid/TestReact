import React, { Component } from 'react'
import PostComponent from "./PostComponent";
import {Link} from 'react-router-dom'; 

class Post extends Component {
    constructor(props) {
        super(props);
    this.state = {
        idUser: this.props.match.params.id,
        postList : []
      }
    }

    componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts?userId='+this.state.idUser)
      .then(res=>res.json())
      .then((data)=>{
        this.setState({postList : data}); 
  
      })
      .catch(console.log)
    };
    
    render() {
      console.log(this.state.postList)
    return (
      <div>
      {this.state.postList.map((postItem)=><Link to={{ pathname:'/comment/'+postItem.id}}><PostComponent postItem={postItem}/></Link>)}
      </div>
    )
  }
}

export default Post;
