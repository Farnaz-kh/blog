import React from "react"
import {Link,  graphql} from "gatsby"
import "./index.css"
import Title from "../components/Title/Title"

export default ({data}) => {
  console.log("Test",data)

  // const Posts = data.allWpPost.edges.map((post)=>{
  //  console.log(post)
  //  return (
  //    <>
  //    <h1>{post.node.title}</h1>
  //    </>
  //  )
  // })
  return(

      <div>
        <Link to="/">Home</Link> |<Link to="/about">about me</Link> 
        <h1 className="color">Welcome to the Gatsby Way of Building</h1>
        { <Title title={data.wp.generalSettings.title} /> }
        {/* { Posts } */}

      </div>

 
)}

export const query = graphql`
query {
    wp {
      generalSettings {
        title
      }
    }
  allWpPost {
    edges {
      node {
        title
      }
    }
  }
}`
