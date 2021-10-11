import React from "react";
import { graphql } from "gatsby" 
import Title from "../components/Title/Title"

export default ({data}) => {
    console.log("Test",data)
    
    const post = data.thePost
    return (
        <div>
        <Title titlePost={post.title} />
        <article>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content}}/>
        </article>
        </div>
    )
}

export const query = graphql`
    query($databaseId: Int!) {
        thePost: wpPost(databaseId: {eq: $databaseId}) {
            id
            date
            databaseId
            content
            title
            author {
              node {
                name
              }
            }
          }
        
    }
`