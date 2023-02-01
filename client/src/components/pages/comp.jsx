import React, { useState } from "react";
import "../../Styles/comp.css";
import sound from "../../assets/Sounds/2023-01-22 182133.wav";
import Start from "./Start";
import { Link } from "react-router-dom";

const StarWars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    const audio = new Audio(sound);
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const [currentPage, setCurrentPage] = useState("/");

  const handleClick = () => {
    console.log("tostart");
    setCurrentPage("/mwfd");
  };

  return (
    <body className="landingpageBody">
      <div className="landingDiv">
        <Link className="linkToStartpage" to={`/home`}>
          Click to get to page
        </Link>
        <button onClick={() => setIsVisible(!isVisible)}>Start</button>
        <div className={`fade ${isVisible ? "visible" : ""}`}></div>
        <section className="star-wars">
          <div className="crawl">
            <div>
              <h1 className="landingpageTitle">The story about a class</h1>
            </div>

            <p className="landingpageParagraph">
              Once upon a time there was a class by the name of Wei21G. The
              class was a nice group of people that were both righteous and had
              lived their lives in peace. This was all about to change..
            </p>

            <p className="landingpageParagraph">
              After a week in school they were starten taken advantage of, and
              time after time they were to fall victims for devious and evil
              exposures. This was by the hand of the evil generals named Victor,
              Henrik and Johanna whoose only object in life was to deminish and
              make people feel stupid
            </p>
            <p className="landingpageParagraph">
              Named generals intentions was the deed of their evil master
              Medieinstitutet. A institute so dark and vicious that it uses
              promises of work and salvation as lure to enslave, degrade and
              make people wash thier hands in cranes that provides minimum
              waterpressure.
            </p>

            <p className="landingpageParagraph">
              Two students had enough, lifted their arms and took up the fight
              against the evil empire.
            </p>
            <p className="landingpageParagraph">
              To late? Perhaps.. But the fight should (hopefully) echo in
              eternity and help future generations of students to have a less
              degrading time at the school and leave them a chance to beat the
              evil generals at their own game
            </p>
          </div>
        </section>
        <div className="withSound" onClick={playSound}>
          Play the tune
        </div>
      </div>
    </body>
  );
};
export default StarWars;
