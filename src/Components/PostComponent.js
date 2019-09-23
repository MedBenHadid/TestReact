import React, { Component } from 'react'
import Post from "../img/post.jpg";
import "../css/post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt,faCommentAlt } from '@fortawesome/free-solid-svg-icons'

class PostComponent extends Component {

    state={
        comment :[]
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId='+this.props.postItem.id)
        .then(res=>res.json())
        .then((data)=>{
          this.setState({comment : data}); 
    
        })
        .catch(console.log)
      };
      
  render() {
    console.log(this.state.comment)
    return (
        <div style={{ display : 'inline-block'}} class="col-lg-4 col-md-6 col-sm-12">
    <div className="card " style={{ width:400 ,textAlign : "left",display : 'inline-block' }}>
    <img className="card-img-top" src={Post} alt="Card image cap" style={{ marginTop:-20 }} />
    <div className="card-body">
      <h5 className="card-title titlePost" style={{ height : 110 }}>{this.props.postItem.title}</h5>
      <p className="card-text paragPost" style={{ height : 200 }}>{this.props.postItem.body}</p>
    </div>
    <div className="card-footer" style={{ display:'flex',justifyContent :' space-between' }}>
      <small className="text-muted"><FontAwesomeIcon icon={faCalendarAlt}/>&nbsp;June 5, 2018</small>
      <small className="text-muted pull-right"><FontAwesomeIcon icon={faCommentAlt}/>&nbsp;{this.state.comment.length}</small>
    </div>
    </div>
    </div>
    )
  }
}

export default PostComponent
