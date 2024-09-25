export interface IArticle {
  title: string;
  description: string;
  urlToImage: string;
}

export default function NewsCard(props: IArticle) {
  return (
    <div className="news-card">
      <div className="titel">{props.title}</div>
      <img src={props.urlToImage} alt={props.urlToImage} />
      <article className="info">{props.description}</article>
    </div>
  );
}
