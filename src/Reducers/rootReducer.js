
const initState = {

   posts:[{id:"1" , title:"yasir Khan",text:"hello this is yasir here"},
   {id:"2" , title:"Sameeer Ali",text:"hello this is Sameer here"},
   {id:"3" , title:"Wasi Bin Ayoub",text:"hello this is Wasi Bin Ayoub here"}

]

}


const rootReducer = (state=initState,action ) => {

    if(action.type==="DELETE_POST")
    {
         let newPost = state.posts.filter(post => {
              return action.id!==post.id
         });

         return{
             ...state,
             posts:newPost
         }
    }

    return state
   
    

}

export default rootReducer;