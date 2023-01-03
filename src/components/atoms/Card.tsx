import { Contact, ContactProps } from "../../models/Portfolio";

export default function Card({ props: contact }: ContactProps) {
  const { name, photo, age } = contact;
  return (
    <div className="card">
      <div className="card-avatar">
        <img src={photo.src} width={"100px"} alt={photo.alt} />
      </div>
      <div className="card-details">
        <div className="name">{name}</div>
        <div className="occupation">Hero</div>

        <div className="card-about">
          <div className="item">
            <span className="value">{age}</span>
            <span className="label">Age</span>
          </div>
          <div className="item">
            <span className="value">70 kg </span>
            <span className="label">Weight</span>
          </div>
          <div className="item">
            <span className="value">175 cm</span>
            <span className="label">Height</span>
          </div>
        </div>
        <div className="skills">
          <span className="value">
            Immeasurable Physical Prowess, Supernatural Reflexes and Senses,
            Invulnerability, Indomitable Will, Enhanced Fighting Skill
          </span>
        </div>
      </div>
    </div>
  );
}
