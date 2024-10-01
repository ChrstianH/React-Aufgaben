import { blogData, BlogPost } from "../assets/data/main";
import { useParams } from "react-router-dom";

export default function BlogArticle() {
  const params = useParams();

  const post: BlogPost = blogData.find(
    (post) => Number(post.id) === Number(params.id)
  ) as BlogPost;

  return (
    <div>
      <img src={post.img_url} alt={post.title} style={{ height: "50vh" }} />
      <div>{post.title}</div>
      <div>{post.published_date}</div>
      <div>{post.description}</div>
      <div>{post.author}</div>
    </div>
  );
}
