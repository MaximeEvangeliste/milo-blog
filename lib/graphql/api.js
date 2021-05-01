const { transformContentfulPostToStandardPost } = require('../contentful');
const { client } = require('./client');
const { AllPostsQuery, PostBySlugQuery } = require('./queries');

const getAllPosts = async () => {
  const allPosts = (await client.request(AllPostsQuery))?.data?.items;
  const final = allPosts.map((p) => transformContentfulPostToStandardPost(p));
  return final;
};

const getPostBySlug = async (slug) => {
  const post = (await client.request(PostBySlugQuery, { slug }))?.data
    ?.items?.[0];

  return transformContentfulPostToStandardPost(post);
};

module.exports = {
  getAllPosts,
  getPostBySlug,
};
