const { gql } = require('../client');
const { BasicPostInfo } = require('../fragments');

const AllPostsQuery = gql`
  query GetAllPosts {
    data: blogArticleCollection {
      items {
        ${BasicPostInfo}
      }
    }
  }
`;

module.exports = {
  AllPostsQuery,
};
