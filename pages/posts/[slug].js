import Home from '../../containers/Home';
// import { getPostBySlug, getAllPosts } from '../../lib/api';
import MetaHead from '../../components/MetaHead';
import PostContent from '../../components/PostContent';
import PostTitle from '../../components/PostTitle';
import PostDetails from '../../components/PostDetails';
import PostCoverImage from '../../components/PostCoverImage';
import metaData from '../../lib/data';
import { contentfulPostSectionsToHTML } from '../../lib/contentful';
import { getAllPosts, getPostBySlug } from '../../lib/graphql/api';

export default function Post({ post }) {
  return (
    <Home>
      <MetaHead
        title={metaData.title}
        description={metaData.description}
        url={metaData.url}
        image={metaData.image}
      />
      <article className="flex flex-col max-w-3xl px-2 mx-auto space-y-4">
        <div className="flex flex-col my-6 space-y-3">
          <PostTitle title={post.title} />
          <PostDetails author={post.author} date={post.date} />
          <PostCoverImage image={post.mainImage} />
          <PostContent content={post.content} />
        </div>
      </article>
    </Home>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const content = contentfulPostSectionsToHTML(post.sections);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
