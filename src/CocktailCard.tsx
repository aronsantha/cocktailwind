import { Cocktail } from "./App";

interface CocktailCardProps {
  cocktail: Cocktail;
  sendDataToParent: (cocktailId: number) => void;
}

function CocktailCard(props: CocktailCardProps) {
  return (
    <div
      className="relative flex h-[200px] w-[200px] grow-0 flex-col items-start justify-end gap-2  overflow-clip rounded-lg !bg-cover shadow-md"
      onClick={() => props.sendDataToParent(props.cocktail.idDrink)}
    >
      <img
        src={props.cocktail.strDrinkThumb}
        alt={props.cocktail.strDrink}
        className="absolute left-0 top-0"
      />

      <div className=" flex min-h-12 w-full items-center bg-white/80 px-4 py-2 font-merriweather text-xs font-semibold text-amber-950 backdrop-blur-sm">
        {props.cocktail.strDrink}
      </div>
    </div>
  );
}

export default CocktailCard;
