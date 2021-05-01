const { GraphQLClient, gql } = require('graphql-request');

const client = new GraphQLClient(
  'https://graphql.contentful.com/content/v1/spaces/48476yfu7f4n/environments/prod',
  {
    headers: {
      // todo: remove sensitive data
      Authorization: 'Bearer WaGML5qaPQXLFWXLkbJW4jeWZVjXBRNU1QsdNaRa5ZI',
    },
  }
);

module.exports = {
  client,
  gql,
};
