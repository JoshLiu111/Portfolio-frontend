import avatar from "./assets/images/avatar-jessica.jpeg";
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
        <button className="buttons text-preset-2-bold">GitHub</button>
        <button className="buttons text-preset-2-bold">Frontend Mentor</button>
        <button className="buttons text-preset-2-bold">LinkedIn</button>
        <button className="buttons text-preset-2-bold">Twitter</button>
        <button className="buttons text-preset-2-bold">Instagram</button>
      </section>
    </div>
  );
};

export default ProfileCard;
