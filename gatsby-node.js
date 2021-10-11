const path = require("path")


const { reporter } = require("gatsby/node_modules/gatsby-cli/lib/reporter/reporter")
// const { default: post } = require("./src/templates/post")

exports.createPages = async ({actions, graphql, reporter }) =>{
    const {createPage } = actions

    //Query all the data
    const queryResult = await graphql(`
    {
        pageQuery: allWpPage {
            nodes {
                databaseId
                uri
            }
        }
        postQuery: allWpPost(sort: {fields: date, order: ASC}) {
            edges {
              node {
                databaseId
                uri
              }
            }
          }
        }

    `)

if (queryResult.errors) {
    reporter.panic("error loding events", queryResult.errors)
    return
}

//Generate single page pages

const pages = queryResult.data.pageQuery.nodes
pages.forEach(page => {
    createPage({
        path: page.uri,
        component: path.resolve("./src/templates/page.js"),
        context: {
            databaseId: page.databaseId,
        }
    })
    
})

//Generate single post pages

const posts = queryResult.data.postQuery.edges
    posts.forEach(post => {
        createPage({
             path:'/posts${post.node.uri}',
            component: path.resolve("./src/templates/post.js"),
            context: {
                databaseId: post.node.databaseId,
            }
         })
    
    })
}