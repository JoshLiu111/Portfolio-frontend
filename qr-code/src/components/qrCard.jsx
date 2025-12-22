const QRCard = () => {
  return (
    <div className="qr-card">
      <img
        className="qr-card-img"
        src="/image-qr-code.png"
        alt="qr picture"
      ></img>
      <h3 className="qr-card-title">
        Improve your front-end skills by building projects
      </h3>
      <p className="qr-card-description">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCard;
