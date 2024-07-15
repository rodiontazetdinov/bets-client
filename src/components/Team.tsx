import { useState, type FC } from "react";

import rocketIcon from "../../assets/rocket.png";

interface TeamProps {
  teamName: string;
  teamLink: string;
  teamMVP: string;
  teamTrack: string;
}

export const Team: FC<TeamProps> = ({
  teamName,
  teamLink,
  teamMVP,
  teamTrack,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackground = (teamTrack: string) => {
    if (teamTrack === "Social Web3") {
      return "bg-sky-500";
    }
    if (teamTrack === "eCommerce") {
      return "bg-rose-500";
    }
    if (teamTrack === "Onboarding systems and games") {
      return "bg-yellow-300";
    }
    if (teamTrack === "DeFi") {
      return "bg-green-400";
    }
  }
  return (
    <li className={`${isOpen ? "bg-gray-300" : "bg-gray-100"} w-full flex flex-col border-gray-200 border p-4`} onClick={() => !isOpen && setIsOpen(!isOpen)}>
      <p className="text-[18px] font-bold text-gray-900 p-2 truncate">{teamName}</p>
      {isOpen && (
        <>
          <a
            className="text-[18px] font-bold  p-2 text-blue-500 truncate"
            href={teamLink}
            target="_blank"
          >
            {teamLink}
          </a>
          <a
            className="text-[18px] font-bold text-blue-500 p-2 truncate"
            href={teamMVP}
            target="_blank"
          >
            {teamMVP}
          </a>
          <p className={`text-[18px] font-bold ${handleBackground(teamTrack)} text-white p-2`} text-white>{teamTrack}</p>
          <button className="text-[18px] font-bold text-white p-2 flex items-center justify-center gap-2 border border-white rounded-full mt-2">Ты победишь <img className="w-8 h-8" src={rocketIcon} />(1 TON)</button>
        </>
      )}
      
    </li>
  );
};
