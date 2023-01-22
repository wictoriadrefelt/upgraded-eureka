import React, { useState } from "react";
import "../../Styles/comp.css";
import sound from "../../assets/Sounds/2023-01-22 182133.wav";

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

  return (
    <body>
      <div className="landingDiv" onClick={playSound}>
        <button onClick={() => setIsVisible(!isVisible)}>Start</button>
        <div className={`fade ${isVisible ? "visible" : ""}`}></div>
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <h1>The story about a class</h1>
            </div>

            <p>
              Once upon a time there was a class by the name of Wei21G. The
              class was a nice group of people that were both righteous and had
              lived their lives in peace. This was all about to change..
            </p>

            <p>
              After a week in school they were starten taken advantage of, and
              time after time they were to fall victims for devious and evil
              exposures. This was by the hand of the evil generals named Victor,
              Henrik and Johanna whoose only object in life was to deminish and
              make people feel stupid
            </p>
            <p>
              Named generals intentions was the deed of their evil master
              Medieinstitutet. A institute so dark and vicious that it uses
              promises of work and salvation as lure to enslave, degrade and
              make people wash thier hands in cranes that provides minimum
              waterpressure.
            </p>

            <p>
              Two students had enough, lifted their arms and took up the fight
              against the evil empire. To late? Perhaps.. But the fight should
              (hopefully) echo in eternity and help future generations of
              students to have a less degrading time at the school and leave
              them a chance to beat the evil generals at their own game
            </p>
          </div>
        </section>
      </div>
    </body>
  );
};
export default StarWars;
