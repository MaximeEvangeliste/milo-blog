export default function PostCoverImage({ image }) {
  return (
    <div class="h-96">
      <img
        src={image.url}
        alt="post"
        className="w-full h-full rounded-sm object-cover object-top"
      />
    </div>
  );
}
