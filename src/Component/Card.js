import "../css/Achievement.css";

const Card = ({ achievement }) => (
  <div className="card">
    <div className="wrapper">
      <img src={achievement.bg} alt="" className="cover-image" />
    </div>
    <img src={achievement.text} alt="" className="title" />
    <img src={achievement.cat} alt="" className="character" />
  </div>
);

export default Card;
