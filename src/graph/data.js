import gql from 'graphql-tag'

const data = ({slug}) => {
  return {
    home: gql`
      {
        actions {
          edges {
            node {
              id
              action {
                page {
                  heading
                  subheading
                  featuredImage {
                    guid
                    srcSet
                  }
                }
                action {
                  actionNetworkId
                  heading
                  context
                }
                profile {
                  name
                  about
                }
                design {
                  colorPrimary
                  colorSecondary
                  paths
                }
              }
            }
          }
        }
      }
    `,
    page: gql`
      {
        pages(where: {name: "${slug}"}) {
          edges {
            node {
              title
              excerpt
              content
            }
          }
        }
      }
    `,
    takeAction: gql`
      {
        actions {
          edges {
            node {
              id
              action {
                page {
                  heading
                  subheading
                  featuredImage {
                    guid
                    srcSet
                  }
                }
                action {
                  actionNetworkId
                  heading
                  context
                }
                profile {
                  name
                  about
                }
                design {
                  colorPrimary
                  colorSecondary
                  paths
                }
              }
            }
          }
        }
      }
    `,
  }
}

export default data