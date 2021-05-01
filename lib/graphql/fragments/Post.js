const { gql } = require('../client');
const { ImageFragment } = require('./Image');

const BasicPostInfo = gql`
  title
  description
  slug
  orderDate
  author {
    name
    picture {
      ${ImageFragment}
    }
  }
`;

module.exports = {
  BasicPostInfo,
};
