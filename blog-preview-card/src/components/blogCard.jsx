import blogImage from "../assets/images/illustration-article.svg";
import avatar from "../assets/images/image-avatar.webp";
const BlogCard = () => {
  return (
    <div className="blog-card">
      <img
        className="blog-card-img"
        src={blogImage}
        alt="illustration article"
      />
      <section className="blog-card-content">
        <span className="blog-category">Learning</span>
        <p className="blog-publish-date">Published 21 Dec 2023</p>
        <h3 className="blog-title">HTML & CSS foundations</h3>
        <p className="blog-description">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </section>
      <section className="blog-card-author">
        <img
          src={avatar}
          alt="author avatar"
          className="blog-card-author-avatar"
        />
        <p className="blog-card-author-name">Greg Hooper</p>
      </section>
    </div>
  );
};

export default BlogCard;
