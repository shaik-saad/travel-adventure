import { useState } from "react";
import "./styles.css";

var trippyAdventure = {
  hillStations: [
    {
      name: "Manali, Himachal Pradesh",
      description:
        "Lover's paradise. Nestled in between the snow-capped slopes of the Pir Panjal and the Dhauladhar ranges, Manali is one of the most popular hill stations in the country",
      rating: "4.5/5"
    },
    {
      name: "Ooty, Tamil Nadu",
      description:
        "Queen of the Nilgiris. The Blue Mountains have always been shrouded in mysticism, and Ooty is no exception to that.",
      rating: "4.2/5"
    },
    {
      name: "Darjeeling, West Bengal",
      description:
        "Queen of the Himalayas. Jaw-dropping locales, mesmerising sunrises, the untouched beauty of the hills, the old-world charm of the past, and the welcoming smiles of the local people all add up to make Darjeeling one of the most beautiful hill stations in Eastern part of India.",
      rating: "4.3/5"
    },
    {
      name: "Leh Ladakh, Jammu & Kashmir",
      description:
        "A land like no other with superabundance of attractions to visit and phantasmagoric and fabulous landscapes, amazing people and culture, Ladakh is truly a heaven on Earth.",
      rating: "4.6/5"
    },
    {
      name: "Mussoorie, UttaraKhand",
      description:
        "If your idea of the perfect holiday involves tranquil hills, untouched nature and a holiday experience that is unadulterated in the truest sense of the term, Mussoorie is the place you should be heading to.",
      rating: "4.1/5"
    }
  ],
  beaches: [
    {
      name: "Andaman & Nicobar",
      description:
        "Secluded Blue Seas, Virgin Islands and Colonial Past, Lagoons of crystal clear water and scenic beaches topped with a little bit of history make Andaman and Nicobar one of the most perfect choices for an enjoyable, laid-back holiday.",
      rating: "4.5/5"
    },
    {
      name: "Goa",
      description:
        "Beautiful Beaches, Sunsets and Crazy Nights.  Nestled in the Konkan Coast Belt, Goa has a coastline stretching for over a 100 kilometres and attracts millions of visitors both from within and outside the country all year round.",
      rating: "4.5/5"
    },
    {
      name: "Lakshadweep Islands",
      description:
        "Most Pristine and Surreal Beaches. Literally meaning a 'hundred thousand islands', Lakshadweep has few of the most beautiful and exotic islands and beaches of India.",
      rating: "4.0/5"
    },
    {
      name: "Varkala, Kerala",
      description:
        "A coastal town in the southern part of Kerala known for the unique 15m high 'Northern Cliff' adjacent to the Arabian Sea. It is popular for its hippie culture, shacks on the cliff serving great seafood and playing global music",
      rating: "4.5/5"
    },
    {
      name: "Kovalam, Kerala",
      description:
        "An idyllic village along the coastlines of the Arabian Sea, Kovalam is most famous for its three pristine beaches with shallow waters and low tidal waves where one can go surfing, wooden and motorboat riding.",
      rating: "4.2/5"
    }
  ],
  historicalPlaces: [
    {
      name: "Taj Mahal, Agra",
      description:
        "The Taj Mahal is one of the seven wonders of the world and is considered to be the most popular tourist attraction in the country. A symbol of love, the Taj was built by Mughal Emperor Shah Jahan for his queen Mumtaz.",
      rating: "4.9/5"
    },
    {
      name: "Hawa Mahal, Jaipur",
      description:
        "The Hawa Mahal stands at the intersection of the main road in Jaipur, Badi Chaupad. It is regarded as the signature building of Jaipur and was built by Maharaja Sawai Pratap Singh.",
      rating: "4.5/5"
    },
    {
      name: "Victoria Memorial",
      description:
        "The Victoria Memorial is a large marble building, which is considered to be the pride of Kolkata. Built between 1906 and 1921, it is dedicated to the memory of Queen Victoria. Now, it is a museum and a popular tourist spot.",
      rating: "4.5/5"
    },
    {
      name: "Charminar, Hyderabad",
      description:
        "Charminar is the most important landmark in the city of Hyderabad. The monument was erected when Quli Qutb Shah shifted his capital from Golcondo to Hyderabad. The monument got its name from its structure as it consists of four minarets.",
      rating: "4.3/5"
    },
    {
      name: "Jallianwala Bagh, Amritsar Punjab",
      description:
        "Jallianwala Bagh is a place of great historical importance during the Indian struggle for Independence. It is a public garden in Amritsar which houses a memorial of national importance",
      rating: "4.4/5"
    }
  ]
};

export default function App() {
  var [userClickedPlace, setUserClickedPlace] = useState("hillStations");

  function hillButtonClickHandler() {
    setUserClickedPlace("hillStations");
  }
  function beachButtonClickHandler() {
    setUserClickedPlace("beaches");
  }
  function historicalButtonClickHandler() {
    setUserClickedPlace("historicalPlaces");
  }
  return (
    <div className="App">
      <h1 id="header-brand">
        <span role="img" aria-label="header emoji logo">
          ✈️{" "}
        </span>
        Trippy Adventure
      </h1>
      <p>
        Places to travel in my beautiful country India. Select a genre to get
        started.
      </p>
      <button className="btn-genre" onClick={() => hillButtonClickHandler()}>
        Hill Stations
      </button>
      <button className="btn-genre" onClick={() => beachButtonClickHandler()}>
        Beaches
      </button>
      <button
        className="btn-genre"
        onClick={() => historicalButtonClickHandler()}
      >
        Historical Places
      </button>
      <hr />
      <ul id="non-bullet-list">
        {trippyAdventure[userClickedPlace].map((place, index) => {
          return (
            <li className="list-item" key={place + index}>
              <h4>
                {place.name}
                <small className="small-rating">
                  <span role="img" aria-label="rating emoji">
                    ⭐{" "}
                  </span>
                  {place.rating}
                </small>
              </h4>
              <p className="small-description">
                <small>{place.description}</small>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
