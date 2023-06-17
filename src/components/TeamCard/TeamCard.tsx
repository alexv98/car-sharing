import React, {FC} from 'react';
import {ITeammate} from "../../types/types";

const TeamCard: FC<ITeammate> = (teammate) => {
  return (
    <div className='team-card'>
      <img src={teammate.img} alt="teammateImg"/>
      <div>
        <h3>{teammate.name}</h3>
        <p>{teammate.job}</p>
      </div>
    </div>
  );
};

export default TeamCard;
