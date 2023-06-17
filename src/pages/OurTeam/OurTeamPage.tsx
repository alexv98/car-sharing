import React, {FC} from 'react';
import TeamCard from "../../components/TeamCard/TeamCard";
import {team} from "../../assets/data";

const OurTeamPage: FC = () => {
  return (
    <section className='team-page'>
      <div className="container">
        <div className="team-page__content">
          <ul className="team-page__list">
            {
              team.map(teammate =>
                <li>{<TeamCard {...teammate} />}</li>
              )
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeamPage;
