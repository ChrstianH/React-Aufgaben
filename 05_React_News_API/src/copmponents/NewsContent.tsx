import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

export interface INews {
  status: string;
  articles: IArticle[];
}

export interface IArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
}

export default function NewsContent(props: { url: string }) {
  const [news, setNews] = useState<IArticle[]>([]);
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  console.log(news);

  if (news.length === 0) {
    return "Loading...";
  }
  console.log(news);

  const newsElements = news.map((singleNews) => {
    if (singleNews.title === "[Removed]") return;
    return (
      <NewsCard
        title={singleNews.title}
        description={singleNews.description || singleNews.content}
        urlToImage={singleNews.urlToImage}
      />
    );
  });

  return (
    <div className="news-content">
      <section>{newsElements}</section>
    </div>
  );
}
