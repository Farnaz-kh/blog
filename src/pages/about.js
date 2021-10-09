import React from "react"
import {Link,  graphql} from "gatsby"
import Title from "../components/Title/Title"

export default ({data}) => {
  


    console.log("Test",data)
    const page = data.allWpPage.edges.map((ed)=>{
        return(
            <Title text={ed.node.title}/>
        )

    })

//   <div>
//     <Link to="/"> Home </Link>
//     <p>Gatsby is a React-based open-source framework for creating websites and apps. It's great whether you're building a portfolio site or blog, or a high-traffic e-commerce store or company homepage.</p> 
//   </div>
return(
<>    {page}
</>
)

}

export const query = graphql`
query {
    allWpPage {
        edges {
          node {
            title
          }
        }
      }
    
}`