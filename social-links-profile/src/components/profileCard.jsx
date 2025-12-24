import avatar from "../assets/images/avatar-jessica.jpeg";
const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={avatar} alt="profile avatar" className="profile-pic" />
      <section className="profile-name-location">
        <h2 className="profile-title text-preset-1">Jessica Randall</h2>
        <p className="profile-description text-preset-2-bold">
          London, United Kingdom
        </p>
      </section>
      <p className="profile-bio text-preset-2">
        "Front-end developer and avid reader."
      </p>
      <section className="profile-links">
        <a
          href="#"
          className="buttons text-preset-2-bold"
          onClick={(e) => e.preventDefault()}
        >
          GitHub
        </a>
        <a
          href="#"
          className="buttons text-preset-2-bold"
          onClick={(e) => e.preventDefault()}
        >
          Frontend Mentor
        </a>
        <a
          href="#"
          className="buttons text-preset-2-bold"
          onClick={(e) => e.preventDefault()}
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="buttons text-preset-2-bold"
          onClick={(e) => e.preventDefault()}
        >
          Twitter
        </a>
        <a
          href="#"
          className="buttons text-preset-2-bold"
          onClick={(e) => e.preventDefault()}
        >
          Instagram
        </a>
      </section>
    </div>
  );
};

export default ProfileCard;
