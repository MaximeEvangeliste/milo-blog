import Link from 'next/link';

export default function PostPreviewTitle(props) {
  const { slug, title } = props;
  // console.log({ props });
  return (
    <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
      <a className="text-xl font-bold no-underline sm:text-2xl hover:underline">
        {title}
      </a>
    </Link>
  );
}
