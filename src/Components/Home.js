import React from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class Home extends React.Component{

    
    render(){
        console.log(this.props)
        const {posts} = this.props
        console.log(posts)
        const postList = posts.length ? ( 
               

            posts.map((post)=>{

                return  (
                       
                    <div className="col-lg-3 col-md-3 col-sm-6"key={post.id} >
                      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">{post.text}</p>
         <Link to ={'/' + post.id} >Click to See more</Link>
         
        </div>
      </div>
                    </div>

                )

            })
  

        )  
        : (
            <div className="container"> <h1 className="text-center"> There is no post</h1></div>
        ) 

        return(

            <>

            <div className="container">

                <div className="row">
                   {postList}
                </div>

            </div>


            </>

        )
    }



}

 const mapStateToProps = (state)=>{
      
      return { 
          posts:state.posts
      }
 }
  

export default connect(mapStateToProps)(Home)