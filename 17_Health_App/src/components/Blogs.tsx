export default function Blogs() {
  return (
    <section className="blogs">
      <div>
        <h2>Our Blogs</h2>
        <p>
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians, and wellness
          experts. Here's what you can expect from our blog.
        </p>
      </div>
      <div className="container">
        <div className="left">
          <img src="../src/assets/img/BlogImageLeft.png" alt="" />
          <p className="topic">Weight Loss</p>
          <h3>The Benefits of Hydration for Weight Loss</h3>
          <p>
            Discover how staying hydrated can support your weight loss goals and
            improve overall health.
          </p>
          <div className="author">
            <img src="../src/assets/img/EmilyJohnson.png" alt="Emily Johnson" />
            <div className="infos">
              <div className="name">Emily Johnson</div>
              <div className="article-details">23 May 2023 - 5 min read</div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="../src/assets/img/BlogImageRight.png" alt="" />
          <p className="topic">Mindful Eating</p>
          <h3>Cultivating a Healthy Relationship with Food</h3>
          <p>
            Learn how practicing mindful eating can help you develop a healthier
            relationship with food and improve your overall well-being.
          </p>
          <div className="author">
            <img
              src="../src/assets/img/SarahThompson.png"
              alt="Sarah Thompson"
            />
            <div className="infos">
              <div className="name">Sarah Thompson</div>
              <div className="article-details">23 May 2023 - 5 min read</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
