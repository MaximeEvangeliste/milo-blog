const { gql } = require('../client');
const { ImageFragment, BasicPostInfo } = require('../fragments');

const PostBySlugQuery = gql`
  query PostBySlug($slug: String) {
    data: blogArticleCollection(limit: 1, where: { slug: $slug }) {
      items {
        ${BasicPostInfo}
        metaTags {
          ogTitle
          ogImage
          ogDescription
        }
        mainImage {
          ${ImageFragment}
        }

        content {
          json
        }
        sections: sectionsCollection {
          items {
            subTitle
            text {
              json
            }
            quote
            image: singleImage {
              ${ImageFragment}
            }
            twoImages: twoImagesCollection {
              items {
                ${ImageFragment}
              }
            }
          }
        }
      }
    }
  }
`;
module.exports = {
  PostBySlugQuery,
};
