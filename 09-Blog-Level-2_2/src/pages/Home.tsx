import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <b>Welcome to my Simple Blog</b>
        <br></br>
        <Link className="button" to="/blog">
          Go to articles
        </Link>
      </div>
    </Layout>
  );
}
