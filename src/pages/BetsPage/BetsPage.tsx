import { useState, type FC } from "react";

import { shuffleArray } from "@/utils/helpers";
import { semiFinalists } from "@/utils/constants";
import { Team } from "@/components/Team";

import shuffleIcon from "./../../../assets/shuffle-icon.png";
import { FilterButtons } from "@/components/FilterButtons";

export const BetsPage: FC = () => {
  const [shuffledArray, setShuffledArray] = useState(shuffleArray(semiFinalists));

  const shuffle = () => {
    setShuffledArray(()=> shuffleArray([...semiFinalists]));
    console.log(shuffledArray[0])
    console.log('sss')
  };

  const filterAndShuffle = (filterBy: string) => {
    const filteredArray = semiFinalists.filter((team) => team.teamTrack === filterBy);
    setShuffledArray(() => shuffleArray([...filteredArray]));
  }

  return (
    <div className="bg-gray-100 w-full h-screen flex flex-col">
      <h1 className="text-2xl font-bold text-gray-900 p-4">Полуфиналисты:</h1>
      
      <FilterButtons onFilter={filterAndShuffle}/>
      <button
        className="p-4 text-[18px] font-bold text-gray-900 flex items-center gap-2 flex justify-end"
        onClick={shuffle}
      >
        Перемешать <img className="w-8 h-8" src={shuffleIcon} />
      </button>
      <ul>
        {shuffledArray.map((team) => (
          <li key={team.teamLink}>
            <Team teamName={team.teamName} teamLink={team.teamLink} teamMVP={team.teamMVP} teamTrack={team.teamTrack}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
