import { Link } from "react-router-dom";
import { BlogPost } from "../assets/data/main";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div>
      <img src={post.img_url} alt="" />
      <div className="title">{post.title}</div>
      <Link className="button" to={`/blog/${post.id}`}>
        Read more
      </Link>
    </div>
  );
}
