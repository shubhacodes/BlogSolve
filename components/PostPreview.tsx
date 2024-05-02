import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
        <p className="text-sm text-slate-600">{props.date} | </p>
        <p className="text-sm text-blue-900 font-bold ml-0.5"> {props.topic}</p>
      </div>
      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
