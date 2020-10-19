import React from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../Actions/postActions'




class Post extends React.Component{

     
  handleDelete = () => { 
      this.props.deletePost(this.props.post.id)
      this.props.history.push("/")
  }
   render(){
       
       const post = this.props.post ? (
        <div className="container"> 
               
        <div className="card" style={{width:"100%"}}>
<div className="card-body">
<h5 className="card-title">{this.props.post.title}</h5>

<p className="card-text">{this.props.post.text}</p>

</div>
</div>
<button type="button" onClick={this.handleDelete}  className="btn btn-primary">Delete Post</button>
   </div>
       )  : 
       (<h1 text-center>Loading post</h1>) 
       return (
         <>
              {post}

         </>
       )
   }


}


const mapStateToProps = (state,ownProps) =>{

    let id = ownProps.match.params.post_id
    return{
        post:state.posts.find(post =>post.id===id)
    }
}

const mapDispatchToProps = (dispatch) => {

   return {
     
      deletePost: (id) =>{ dispatch(deletePost(id))}

   }

}



export default connect(mapStateToProps,mapDispatchToProps)(Post)