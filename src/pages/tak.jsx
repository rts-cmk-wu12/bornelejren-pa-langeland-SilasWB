import { useEffect, useState } from "react";
import Nav from "../components/nav";
import "../style/resets.scss";
import "../style/tak.scss";

function Tak() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch("/api/sponsors")
      .then(res => res.json())
      .then(data => setSponsors(data));
  }, []);

  return (
    <>
      <Nav />
      <main className="tak-main">
        <h1 className="tak-title">Tak til vores sponsorer</h1>
        <p className="tak-description">Børnelejren på Langeland takker alle sponsorer for deres generøse støtte. Uden jeres bidrag ville det ikke være muligt at skabe mindeværdige oplevelser for børnene.</p>
        <h5 className="tak-subtitle">En særlig tak til:</h5>
        <ul className="sponsors-list">
          {sponsors.map((sponsor) => (
            <li className="sponsor-item" key={sponsor._id}>
              {sponsor.company}, {sponsor.supportType}, {sponsor.amount} kr.
            </li>
          ))}
        </ul>
        <hr className="tak-divider" />
      </main>
    </>
  );
}

export default Tak;
