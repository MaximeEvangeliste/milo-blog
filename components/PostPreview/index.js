import PostDetails from '../PostDetails';
import PostExcerpt from '../PostExcerpt';
import PostPreviewTitle from '../PostPreviewTitle';

export default function PostPreview({ post }) {
  return (
    <div className="flex flex-col my-4 space-y-3">
      <PostPreviewTitle {...post} />
      <PostDetails {...post} />
      <PostExcerpt {...post} />
    </div>
  );
}
