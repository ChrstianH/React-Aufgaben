import { blogData, BlogPost } from "../assets/data/main";
import BlogCard from "../components/blogCard";
import Layout from "../components/Layout";

export default function Blog() {
  const blogPosts: BlogPost[] = [...blogData];
  return (
    <Layout>
      <div className="blogposts">
        {blogPosts.map((post: BlogPost) => (
          <BlogCard post={post} />
        ))}
      </div>
    </Layout>
  );
}
