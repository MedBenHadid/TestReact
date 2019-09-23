import React, { Component } from 'react'
import  '../css/comment.css'
import CommentComponent from './CommentComponent';
class Comment extends Component {
    constructor(props) {
        super(props);
    this.state = {
        idPost: this.props.match.params.postId,
        commentList : []
      }
    }


    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId='+this.state.idPost)
        .then(res=>res.json())
        .then((data)=>{
          this.setState({commentList : data}); 
    
        })
        .catch(console.log)
      };
  render() {
      console.log(this.state.idPost)
    return (
        <div class="container">
        <div class="col-md-5">
            <div class="panel panel-default">
                <div class="panel-body">
                   <section class="post-heading pull-left">
                        <div class="row">
                            <div class="col-md-11">
                                <div class="media">
                                  <div class="media-left">
                                    <a href="#">
                                      <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="50" height="50" alt="..."/>
                                    </a>
                                  </div>
                                  <div class="media-body" style={{ width :150 }}>
                                    <a href="#" class="anchor-username"><h4 class="media-heading">Bayu Darmantra</h4>
                                    
                                    </a> 
                                    <u style={{ marginLeft :-95 }}>51 mins</u>
                                  </div>
                                </div>
                            </div>

                        </div>             
                   </section>
                   <section class="post-body pull-left" style={{ textAlign : 'left', marginTop : 20}}>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
                       turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
                       erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
                       licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
                       l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
                       ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus
                       efficitur dictum. Nunc ut pulvinar quam. N
                       unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.</p>
                   </section>
                   <section class="post-footer pull-left">
                       <hr style={{ width : 400  }}/>
                       <div class="post-footer-option " style={{ display:'flex',justifyContent :' space-between' }}>
                            <ul class="list-unstyled" >
                                <a href="#"><i class="glyphicon glyphicon-thumbs-up btnn"></i> Like</a>
                                <a href="#"><i class="glyphicon glyphicon-comment btnn"></i> Comment</a>
                                <a href="#"><i class="glyphicon glyphicon-share-alt btnn"></i> Share</a>
                            </ul>
                       </div>
                       <div class="post-footer-comment-wrapper">
                           <div class="comment-form">
                               
                           </div>
                      {
                          this.state.commentList.map((item)=><CommentComponent itemName={item.name} itemBody={item.body}/>)
                      }
                      {/* <CommentComponent/>
                      <CommentComponent/> */}

                       </div>
                   </section>
                </div>
            </div>   
        </div>
    </div>
    )
  }
}

export default Comment
