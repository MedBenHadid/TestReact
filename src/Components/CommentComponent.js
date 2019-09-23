import React from 'react';
class CommentComponent extends React.Component  {

render(){
    // console.log(this.state.commentList)

  return (
  <div class="comment">
                                <div class="media" style={{ height : 60 }}>
                                  <div class="media-left">
                                    <a href="#">
                                      <img class="media-object photo-profile" style= {{ marginTop : 8 }} src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="50" height="50" alt="..."/>
                                    </a>
                                  </div>
                                  <div class="media-body" >
                                    <a href="#" class="anchor-username pull-left" style= {{ marginLeft : 20 }}><h4 class="media-heading">{this.props.itemBody.substr(1, 7)}</h4></a> <br/>
                                    <a href="#" class="anchor-time pull-left" style= {{ marginLeft : -48 }}>51 mins</a><br/>
                                    <div class="pull-left"> {this.props.itemName} </div>
                                  </div>
                                </div>
                                <hr/>
 </div>
  );
}
}

export default CommentComponent;
