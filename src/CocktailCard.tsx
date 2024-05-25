import { Cocktail } from "./App";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

interface CocktailCardProps {
  cocktail: Cocktail;
}

export const CocktailCard = (props: CocktailCardProps) => {
  return (
    <div className="group relative flex h-[200px] w-[200px] grow-0 flex-col items-start justify-end gap-2 overflow-clip  rounded-lg !bg-cover shadow-md hover:cursor-pointer">
      <img
        src={props.cocktail.strDrinkThumb}
        alt={props.cocktail.strDrink}
        className="absolute left-0 top-0"
      />

      <div className="relative flex h-12 w-full flex-col justify-start px-4 py-4 font-merriweather text-xs font-semibold text-white backdrop-blur-xl transition-all group-hover:h-full group-hover:justify-between">
        <p className="text-shadow-sm shrink-0 truncate group-hover:text-wrap">
          {props.cocktail.strDrink}
        </p>
        <ArrowRightCircleIcon className="absolute left-[50%] top-[50%] hidden w-[50px] translate-x-[-50%] translate-y-[-50%] text-white group-hover:block " />
      </div>
    </div>
  );
};
