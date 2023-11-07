import React from "react";
import { Link } from "react-router-dom";
//import { v4 } from "uuid";

const Services = () => {
  // const $2024AfricanCupPotentialWinners = [
  //   {
  //     country: "Egypt will win the Afcon2024",
  //     pastSuccesses: "7 Afcon titles",
  //     id: v4(),
  //   },
  //   {
  //     country: "Cameroon will win the Afcon2024",
  //     pastSuccesses: "5 Afcon titles",
  //     id: v4(),
  //   },
  //   {
  //     country: "Ghana will win the Afcon2024",
  //     pastSuccesses: "4 Afcon titles",
  //     id: v4(),
  //   },
  //   {
  //     country: "Nigeria will win the Afcon2024",
  //     pastSuccesses: "3 Afcon titles",
  //     id: v4(),
  //   },
  //   {
  //     country: "Ivory Coast will win the Afcon2024",
  //     pastSuccesses: "2 Afcon titles",
  //     id: v4(),
  //   },
  //   {
  //     country: "DR Congo will win the Afcon2024",
  //     pastSuccesses: "2 Afcon titles",
  //     id: v4(),
  //   },
  // ];

  return (
    <div>
      <h1>About Page</h1>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      {/* {$2024AfricanCupPotentialWinners.map(($2024AfricanCupPotentialWinner) => {
        return (
          <Link
            key={$2024AfricanCupPotentialWinners.id}
            to={`/Services/${$2024AfricanCupPotentialWinners.id}`}
          >
            <h1>{$2024AfricanCupPotentialWinners.country}</h1>

            <h2>{$2024AfricanCupPotentialWinners.pastSuccesses}</h2>
          </Link>
        );
      })} */}

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <br />

      <Link to="/ServiceDetails">About Page</Link>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Services;
