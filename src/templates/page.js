import React from "react"
import { graphql } from "gatsby" 
import Title from "../components/Title/Title"

export default ({data}) => {
    console.log("Test",data)
    
    const page = data.wpPage
    return (
        <div>
        <Title titlePage={page.title} />
        <article>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{__html: page.content}}/>
        </article>
        </div>
    )
}

export const query = graphql`
    query($databaseId: Int!) {
        wpPage(databaseId: { eq: $databaseId }) {
            title
            content
        }
    }
`