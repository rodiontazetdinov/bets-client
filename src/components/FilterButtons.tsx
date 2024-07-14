import { type FC } from "react";

interface FilterButtonsProps {
    onFilter: (filterBy: string) => void
}

export const FilterButtons: FC<FilterButtonsProps> = ({ onFilter }) => {
    return (
        <ul className="flex gap-1 p-2">
            <li className="bg-sky-500  flex flex-col rounded-md w-[250px] border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('Social Web3')}>Social Web3</button>
            </li>
            <li className="bg-rose-500  flex flex-col rounded-md w-[250px] border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('eCommerce')}>eCommerce</button>
            </li>
            <li className="bg-yellow-300  flex flex-col rounded-md w-[250px] border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('Onboarding systems and games')}>Onbng and games</button>
            </li>
            <li className="bg-green-400  flex flex-col rounded-md w-[250px] border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('DeFi')}>DeFi</button>
            </li>
        </ul>
    )
}