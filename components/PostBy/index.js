export default function PostBy({ author }) {
  return (
    <div className="flex flex-row space-x-2 text-sm">
      <span>By</span>
      <span className="font-bold">{author.name}</span>
    </div>
  );
}
