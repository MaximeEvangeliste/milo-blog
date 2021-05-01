const { gql } = require('../client');

const ImageFragment = gql`
  title
  description
  contentType
  url
`;

module.exports = {
  ImageFragment,
};
